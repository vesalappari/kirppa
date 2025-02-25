import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CreateProductComponent {
  product: Product = {
    owner_id: 0,
    name: '',
    description: '',
    price: null as any as number,
    category: '',
    status: 'available',
    image_url: 'url'
  };

  constructor(private productService: ProductService) {}

  createProduct() {
    this.productService.createProduct(this.product).subscribe(response => {
      console.log('Product created successfully', response);
    }, error => {
      console.error('Error creating product', error);
    });
  }
}
