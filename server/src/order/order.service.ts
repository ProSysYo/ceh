import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Order } from "./order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class OrderService {
	constructor(
		@InjectRepository(Order)
		private repository: Repository<Order>
	) {}

	async create(dto: CreateOrderDto): Promise<Order> {
		const number = new Date().valueOf();
		const dateCreate: Date = new Date();
		const newOrder = await this.repository.create({ ...dto, number, dateCreate });
		const order = await this.repository.save(newOrder);
		return order;
	}

	async update(dto: UpdateOrderDto): Promise<Order> {
		console.log(dto.id);
		const id = dto.id;

		const order = await this.repository.findOne(id);

		if (!order) {
			throw new HttpException(`Заказ не найден`, HttpStatus.NOT_FOUND);
		}

		await this.repository.update(id, dto);
		return await this.repository.findOne(id);
	}

	async getAll(query): Promise<Order[]> {
		const orders = await this.repository.find({ where: query });
		return orders;
	}

	async findOne(id: number) {
		const order = await this.repository.findOne(id);

		if (!order) {
			throw new HttpException(`Заказ не найден`, HttpStatus.NOT_FOUND);
		}
		return order;
	}
}
