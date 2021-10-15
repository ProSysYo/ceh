import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ unique: true, required: true })
  number: number;
  
  @Prop({ required: true })
  customer: string;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  width: number;
}

export const OrdreSchema = SchemaFactory.createForClass(Order);
