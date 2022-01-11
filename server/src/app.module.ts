import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order/order.model';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ceh',
      models: [Order],
      autoLoadModels: true,
      synchronize: true,
    }),
    OrderModule,
  ],
})
export class AppModule { }
