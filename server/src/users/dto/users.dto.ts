import { ObjectId } from 'mongoose';

export class CreateUserDTO {
  readonly mobile: string;
  readonly password: string;
  readonly name: string;
  readonly email: string;
  readonly balance: number;
  readonly posts: ObjectId[];
  readonly postFollowed: ObjectId[];
}
