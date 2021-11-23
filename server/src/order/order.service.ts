import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async create(dto: CreateOrderDto): Promise<Order> {
        const number: Number = new Date().valueOf()
        const order = await this.orderModel.create({...dto, number})
        return order
    }

    async getAll(query): Promise<Order[]> {
        const orders = await this.orderModel.find(query)
        return orders
    }
}
