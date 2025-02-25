import {
  Controller,
  Get,
  Post,
  Body,
  /*
  Param,
  Delete,
  Put,
    */
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductModel } from '../models/product.model';
import { Product } from '../entitys/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  /*
  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<ProductModel> {
    return this.productService.getProductById(id);
  }
    */

  @Post('create')
  async createProduct(@Body() product: ProductModel): Promise<ProductModel> {
    return this.productService.createProduct(product);
  }

  /*
  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() product: ProductModel,
  ): Promise<ProductModel> {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
    */
}
