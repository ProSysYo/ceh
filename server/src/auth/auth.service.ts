import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UserService } from "src/user/user.service";
import { User } from "../user/user.entity";
import { CreateUserDto } from "../user/create-user.dto";

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private jwtService: JwtService) {}

	async login(dto: CreateUserDto) {
		const user = await this.validateUser(dto);
		return this.generateToken(user);
	}

	async registration(dto: CreateUserDto) {
		const candidate = await this.userService.findByLogin(dto.login);
		if (candidate) {
			throw new HttpException(
				"Пользователь с таким логином существует",
				HttpStatus.BAD_REQUEST
			);
		}
		const hashPassword = await bcrypt.hash(dto.password, 5);
		const user = await this.userService.create({ ...dto, password: hashPassword });
		return this.generateToken(user);
	}

	private async generateToken(user: User) {
		const payload = { login: user.login, id: user.id, roles: user.role };
		return {
			token: this.jwtService.sign(payload),
		};
	}

	private async validateUser(dto: CreateUserDto) {
		const user = await this.userService.findByLogin(dto.login);
		if (!user) {
			throw new UnauthorizedException({ message: "Такого логина не существует" });
		}
		const passwordEquals = await bcrypt.compare(dto.password, user.password);
		if (!passwordEquals) {
			throw new UnauthorizedException({ message: "Пароль не верный" });
		}
		return user;
	}
}
