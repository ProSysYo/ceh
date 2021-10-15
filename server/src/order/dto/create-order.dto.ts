import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty({message: 'заказчик Не должно быть пустым'})    
    readonly customer: string;

    @IsNotEmpty({message: 'высота Не должно быть пустым'})    
    readonly height: number;

    @IsNotEmpty({message: 'номер Не должно быть пустым'})    
    readonly width: number;
}