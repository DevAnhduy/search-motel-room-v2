import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.interface';
import { CreateProductDTO } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getAllProduct(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    return products;
  }

  async getProduct(productID: string): Promise<Product> {
    const product = this.productModel.findById(productID).exec();
    return product;
  }

  async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = await this.productModel.create(createProductDTO);
    return newProduct;
  }

  async updateProduct(productID: string, createProductDTO: CreateProductDTO) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }

  async deleteProduct(productID: string) {
    const deleteProduct = await this.productModel.findByIdAndDelete(productID);
    return deleteProduct;
  }
}
