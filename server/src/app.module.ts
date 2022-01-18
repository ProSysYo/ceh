import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { Order } from "./order/order.entity";
import { OrderModule } from "./order/order.module";
import { User } from "./user/user.entity";
import { UserModule } from "./user/user.module";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "1234",
			database: "ceh",
			entities: [Order, User],
			synchronize: true,
		}),
		OrderModule,
		UserModule,
		AuthModule,
	],
})
export class AppModule {}
