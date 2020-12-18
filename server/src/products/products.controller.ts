import {
  Controller,
  Post,
  Get,
  Body,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDTO } from './products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(@Res() res) {
    const products = await this.productsService.getAllProduct();
    return res.status(HttpStatus.OK).json(products);
  }

  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') _productID: string) {
    const product = await this.productsService.getProduct(_productID);
    if (!product) throw new NotFoundException('Product does not exist! ');
    return res.status(HttpStatus.OK).json(product);
  }

  @Post()
  async addProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productsService.addProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Create product success',
      product,
    });
  }
}
