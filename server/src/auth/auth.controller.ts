import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "src/user/create-user.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post("/login")
	login(@Body() dto: CreateUserDto) {
		return this.authService.login(dto);
	}

	@Post("/register")
	registration(@Body() dto: CreateUserDto) {
		return this.authService.registration(dto);
	}

	@Get("/auth")
	auth(@Req() request: Request) {
		return this.authService.auth(request);
	}
}
