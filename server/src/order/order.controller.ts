import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import ParamsWithId from 'src/util/ParamsWithId';

@Controller('/orders')
export class OrderController {
    constructor(private orderService: OrderService) {}
    
    @Post()
    create(@Body() dto: CreateOrderDto) {
        return this.orderService.create(dto)
    }

    @Get()
    getAll(@Query() query) { 
        return this.orderService.getAll(query)
    }

    @Get(':id')
    async getOrder(@Param() { id }: ParamsWithId) {
        return this.orderService.findOne(id);
    }

}
