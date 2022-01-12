import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('/orders')
export class OrderController {
	constructor(private orderService: OrderService) {}

	@Post()
	create(@Body() dto: CreateOrderDto) {
		return this.orderService.create(dto);
	}

	@Patch(':id')
	update(@Body() dto: UpdateOrderDto) {
		return this.orderService.update(dto);
	}

	@Get()
	getAll(@Query() query) {
		return this.orderService.getAll(query);
	}

	@Get(':id')
	async getOrder(@Param() { id }) {
		return this.orderService.findOne(id);
	}
}
