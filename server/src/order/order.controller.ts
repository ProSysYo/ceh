import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('/orders')
export class OrderController {
    constructor(private orderService: OrderService) {}
    
    @Post()
    create(@Body() dto: CreateOrderDto) {
        return this.orderService.create(dto)
    }

    @Get()
    getAll(@Query() query) {
        console.log(query);
        
        return this.orderService.getAll(query)
    }
}
