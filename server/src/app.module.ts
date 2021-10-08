import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://prosys:prosys@cluster0.4hlja.mongodb.net/ceh?retryWrites=true&w=majority',
    ),
    OrderModule,
  ],
})
export class AppModule {}
