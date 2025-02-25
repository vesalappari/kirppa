import { Injectable } from '@nestjs/common';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  private products: ProductModel[] = [];

  getAllProducts(): Promise<ProductModel[]> {
    return Promise.resolve(this.products);
  }

  getProductById(id: number): Promise<ProductModel> {
    const product = this.products.find((product) => product.id_number === id);
    if (product) {
      return Promise.resolve(product);
    }
    return Promise.reject(new Error('Product not found'));
  }

  createProduct(product: ProductModel): Promise<ProductModel> {
    this.products.push(product);
    return Promise.resolve(product);
  }

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
}
