import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  userId: number;
  
  @Prop()
  name: string;

  @Prop()
  address: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);