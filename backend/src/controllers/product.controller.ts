import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<ProductModel[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<ProductModel> {
    return this.productService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() product: ProductModel): Promise<ProductModel> {
    return this.productService.createProduct(product);
  }

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
}
