import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrdreSchema } from './order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Order.name, schema: OrdreSchema}]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
