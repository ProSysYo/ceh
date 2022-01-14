import { IsNotEmpty } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends CreateOrderDto {
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly id: number;
}
