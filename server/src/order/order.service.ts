import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async create(dto: CreateOrderDto): Promise<Order> {

        // if (dto.widthDouble === 0) {
        //     throw new HttpException({ 
        //         status: HttpStatus.FORBIDDEN, 
        //         errors: 'Ширина доп створки болжна быть больше 0'
        //     }, HttpStatus.FORBIDDEN);
        // }        

        const number: Number = new Date().valueOf()
        const dateCreate: Date = new Date()
        const order = await this.orderModel.create({ ...dto, number, dateCreate })
        return order
    }

    async update(dto: UpdateOrderDto): Promise<Order> {  
        console.log(dto._id);
              
        const order = await this.orderModel.findOneAndUpdate({ _id: dto._id }, dto, {new: true})
        return order
    }

    async getAll(query): Promise<Order[]> {
        const orders = await this.orderModel.find(query)
        return orders
    }

    async findOne(id: string) {
        const order = await this.orderModel.findById(id)

        if (!order) {
            throw new NotFoundException();
        }
        return order;
    }
}
