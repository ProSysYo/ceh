import { Module } from "@nestjs/common";

import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";

@Module({
	imports: [TypeOrmModule.forFeature([Order]), AuthModule],
	controllers: [OrderController],
	providers: [OrderService],
})
export class OrderModule {}
