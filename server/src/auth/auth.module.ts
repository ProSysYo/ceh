import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";

@Module({
	controllers: [AuthController],
	providers: [AuthService],
	imports: [
		UserModule,
		JwtModule.register({
			secret: process.env.PRIVATE_KEY || "SECRET",
		}),
	],
	exports: [AuthService, JwtModule],
})
export class AuthModule {}
