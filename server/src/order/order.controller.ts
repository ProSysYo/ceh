import { Body, Controller, Get, Param, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Roles } from "src/decorators/roles.decorator";
import { RolesGuard } from "../guards/roles.guard";
import { Request } from "express";

interface RequestWithUser extends Request {
	user: any;
}

@Controller("/orders")
@UseGuards(RolesGuard)
export class OrderController {
	constructor(private orderService: OrderService) {}

	@Post()
	@Roles("ADMIN", "MANAGER")
	create(@Body() dto: CreateOrderDto, @Req() request: RequestWithUser) {
		console.log(request.user);
		return this.orderService.create(dto);
	}

	@Patch(":id")
	@Roles("ADMIN", "MANAGER")
	update(@Body() dto: UpdateOrderDto) {
		return this.orderService.update(dto);
	}

	@Get()
	@Roles("ADMIN", "MANAGER", "CONSTR", "MASTER")
	getAll(@Query() query) {
		return this.orderService.getAll(query);
	}

	@Get(":id")
	@Roles("ADMIN", "MANAGER", "CONSTR", "MASTER")
	async getOrder(@Param() { id }) {
		return this.orderService.findOne(id);
	}
}
