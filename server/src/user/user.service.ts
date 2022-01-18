import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./create-user.dto";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private repository: Repository<User>
	) {}

	async create(dto: CreateUserDto) {
		const newUser = this.repository.create({ ...dto, role: "USER", isActive: true });
		const user = await this.repository.save(newUser);
		return user;
	}

	async findByLogin(login: string) {
		const user = await this.repository.findOne({ where: { login: login } });
		return user;
	}
}
