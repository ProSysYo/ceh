import {
	CanActivate,
	ExecutionContext,
	HttpException,
	HttpStatus,
	Injectable,
	UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { RoleTypes } from "../types/RoleTypes";

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector, private jwtService: JwtService) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		try {
			const roles = this.reflector.get<RoleTypes[]>("roles", context.getHandler());
			if (!roles) {
				return true;
			}
			const request = context.switchToHttp().getRequest();
			const authHeader = request.headers.authorization;
			const bearer = authHeader.split(" ")[0];
			const token = authHeader.split(" ")[1];

			if (bearer !== "Bearer" || !token) {
				throw new UnauthorizedException({ message: "Пользователь не авторизован" });
			}

			const user = this.jwtService.verify(token);
			request.user = user;
			const haseRole = roles.some((item) => item === user.role);

			if (haseRole === false) {
				throw new HttpException("Доступ запрещен", HttpStatus.FORBIDDEN);
			}
			return haseRole;
		} catch (e) {
			throw new HttpException("Доступ запрещен", HttpStatus.FORBIDDEN);
		}
	}
}
