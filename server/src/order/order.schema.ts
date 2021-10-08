import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ unique: true, required: true })
  number: number;
  
  @Prop()
  customer: string;

  @Prop()
  height: number;

  @Prop()
  width: number;
}

export const OrdreSchema = SchemaFactory.createForClass(Order);
