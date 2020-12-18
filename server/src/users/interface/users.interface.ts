import { Document, ObjectId } from 'mongoose';

export interface User extends Document {
  readonly mobile: string;
  password: string;
  readonly name: string;
  readonly email: string;
  readonly balance: number;
  readonly posts: ObjectId[];
  readonly postFollowed: ObjectId[];
}
