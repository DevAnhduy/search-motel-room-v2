import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../interface/users.interface';

export const UserSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: [true, 'A user must ave a mobile'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  },
  name: String,
  email: String,
  balance: {
    type: Number,
    default: 0,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  postFollowed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre<User>('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.correctPassword = async function (
  candiatePassword: string,
  userPassowrd: string,
) {
  return bcrypt.compare(candiatePassword, userPassowrd);
};
