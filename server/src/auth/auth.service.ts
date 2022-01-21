import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UserService } from "src/user/user.service";
import { User } from "../user/user.entity";
import { CreateUserDto } from "../user/create-user.dto";
import { EntryUserDto } from "../user/entry-user.dto";

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private jwtService: JwtService) {}

	async login(dto: EntryUserDto) {
		const user = await this.validateUser(dto);
		const token = await this.generateToken(user);
		return {
			token,
			user: {
				id: user.id,
				name: user.name,
				role: user.role,
			},
		};
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
		return user;
	}

	async auth(authHeader: string) {
		const bearer = authHeader.split(" ")[0];
		const token = authHeader.split(" ")[1];

		if (bearer !== "Bearer" || !token) {
			throw new UnauthorizedException({ message: "Пользователь не авторизован" });
		}

		const user = this.jwtService.verify(token);
		const newToken = await this.generateToken(user);
		return {
			token: newToken,
			user: {
				id: user.id,
				name: user.name,
				role: user.role,
			},
		};
	}

	private async generateToken(user: User) {
		const payload = { name: user.name, id: user.id, role: user.role };
		return this.jwtService.sign(payload);
	}

	private async validateUser(dto: EntryUserDto) {
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
