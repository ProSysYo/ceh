import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order/order.model';
import { OrderModule } from './order/order.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: '1234',
			database: 'ceh',
			entities: [Order],
			synchronize: true,
		}),
		OrderModule,
	],
})
export class AppModule {}
