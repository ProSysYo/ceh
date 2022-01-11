import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order) 
        private orderModel: typeof Order,
    ) { }

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

//     async update(dto: UpdateOrderDto): Promise<Order> {  
//         console.log(dto._id);
              
//         const order = await this.orderModel.findByPk({ id: dto._id }, dto)
//         return order
//     }

    async getAll(query): Promise<Order[]> {
        const orders = await this.orderModel.findAll({where: query})
        return orders
    }

//     async findOne(id: number) {
//         const order = await this.orderModel.findOne(id)

//         if (!order) {
//             throw new NotFoundException();
//         }
//         return order;
//     }
}
