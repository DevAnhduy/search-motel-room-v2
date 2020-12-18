import { Document } from 'mongoose';

export interface Product extends Document {
  readonly title: string;
  readonly price: number;
  readonly description: string;
}
