import { Injectable } from '@nestjs/common';
import { ProductModel } from '../models/product.model';
import { Product } from '../entitys/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  /*
  getProductById(id: number): Promise<ProductModel> {
    const product = this.products.find((product) => product.id_number === id);
    if (product) {
      return Promise.resolve(product);
    }
    return Promise.reject(new Error('Product not found'));
  }
    */

  async createProduct(product: ProductModel): Promise<Product> {
    const new_product = this.productsRepository.create(product);
    return this.productsRepository.save(new_product);
  }

  /*
  updateProduct(
    id: number,
    updatedProduct: ProductModel,
  ): Promise<ProductModel> {
    const index = this.products.findIndex(
      (product) => product.id_number === id,
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
      return Promise.resolve(updatedProduct);
    }
    return Promise.reject(new Error('Product not found'));
  }

  deleteProduct(id: number): Promise<void> {
    this.products = this.products.filter((product) => product.id_number !== id);
    return Promise.resolve();
  }
    */
}
