import { HttpException, HttpStatus, Injectable, Req, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UserService } from "src/user/user.service";
import { User } from "../user/user.entity";
import { CreateUserDto } from "../user/create-user.dto";
import { Request } from "express";

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private jwtService: JwtService) {}

	async login(dto: CreateUserDto) {
		const user = await this.validateUser(dto);
		const token = await this.generateToken(user);
		return {
			token,
			user: {
				id: user.id,
				login: user.login,
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

	async auth(@Req() request: Request) {
		const header = request.headers.authorization;
		const bearer = header.split(" ")[0];
		const token = header.split(" ")[1];

		if (bearer !== "Bearer" || !token) {
			throw new UnauthorizedException({ message: "Пользователь не авторизован" });
		}

		const user = this.jwtService.verify(token);
		const newToken = await this.generateToken(user);
		return {
			token: newToken,
			user: {
				id: user.id,
				login: user.login,
				role: user.role,
			},
		};
	}

	private async generateToken(user: User) {
		const payload = { login: user.login, id: user.id, roles: user.role };
		return this.jwtService.sign(payload);
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
