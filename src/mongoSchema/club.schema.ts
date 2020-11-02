import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Club extends Document {
  // @Prop()
  // name: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  score: number;

}

export const club_schema = SchemaFactory.createForClass(Club)