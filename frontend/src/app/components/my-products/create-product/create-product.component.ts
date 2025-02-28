import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { MyProductsComponent } from '../my-products.component';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    owner_id: 0,
    name: '',
    description: '',
    price: null as any as number,
    category: '',
    status: 'available',
    image_url: 'url'
  };

  user: User = {
    id: 0,
    name: '',
    email: ''
  };

  categories = ['clothing', 'toys', 'games', 'books', 'other'];

  productResponse: string = '';

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private myProductsComponent: MyProductsComponent
  ) {}

  ngOnInit(): void {
    this.resetForm();
    this.updateUser();
  }

  updateUser() {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.user = user;
        this.product.owner_id = this.user.id;
      }
    });
  }

  resetForm() {
    this.product = {
      owner_id: 0,
      name: '',
      description: '',
      price: null as any as number,
      category: '',
      status: 'available',
      image_url: 'url'
    };
  }

  createProduct() {
    this.productService.createProduct(this.product).subscribe(response => {
      if (response.name) {
        this.myProductsComponent.updateProducts();
        this.productResponse = 'Lisättiin ' + response.name;
        setTimeout(() => {
          this.productResponse = "";
        }, 2000);
        this.resetForm();
      }
      console.log('Product created successfully', response);
    }, error => {
      console.error('Error creating product', error);
    });
  }
}
