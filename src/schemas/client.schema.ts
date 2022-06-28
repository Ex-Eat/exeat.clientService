import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema({ timestamps: true })
export class Client {
  @Prop()
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  globalUserId: number;
  
  @Prop()
  firstName: string;
  
  @Prop()
  lastName: string;
  
  @Prop()
  phoneNumber: string;
  
  @Prop()
  termsOfUse: boolean;
  
  @Prop({
    type: {
      lat: Number,
      lng: Number,
      address: String,
    },
  })
  locations: [{lat: number, lng: number, address: string}];
  
  @Prop()
  patronageCode: string;
  
  @Prop()
  notification: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);