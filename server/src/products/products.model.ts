import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
});
