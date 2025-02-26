import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-products',
  imports: [ProductComponent, FormsModule, CommonModule, CreateProductComponent],
  templateUrl: './my-products.component.html',
  styleUrl: '../../../styles.css'
})
export class MyProductsComponent {

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) { }

  showProducts: boolean = false;
  showImages: boolean = false;
  user: User = {
      id: 0,
      name: '',
      email: ''
    };

  protected products: Product[] = [];
   /*
  products = [
    { imageUrl: 'img/vintage_shirt.jpeg', altText: 'Vintage T-Shirt', title: 'Vintage T-paita', price: '10€', status: '✅' },
    { imageUrl: 'img/leather_jacket.jpeg', altText: 'Leather Jacket', title: 'Nahkatakki', price: '50€', status: '✅' },
    { imageUrl: 'img/wooden_airplane.jpeg', altText: 'Wooden Toys', title: 'Puinen lentokone', price: '10€', status: '✅' },
    { imageUrl: 'img/ceramig_mug.jpeg', altText: 'Ceramic Mug', title: 'Muki', price: '5€', status: '✅' },
    { imageUrl: 'img/book.jpeg', altText: 'Books', title: 'Tietokirja', price: '5€', status: '✅' },
    { imageUrl: 'img/board_game.jpeg', altText: 'Board Game', title: 'Lautapeli', price: '10€', status: '✅' },
    { imageUrl: 'img/necklace.jpeg', altText: 'Jewelry', title: 'Kaulakoru', price: '60€', status: '🏷️' },
    { imageUrl: 'img/shoes.jpeg', altText: 'Shoes', title: 'Kengät', price: '10€', status: '🏷️' },
    { imageUrl: 'img/handbag.jpeg', altText: 'Handbag', title: 'Käsilaukku', price: '20€', status: '🏷️' },
    { imageUrl: 'img/candle_holder.jpeg', altText: 'Home Decor', title: 'Kynttilänjalka', price: '15€', status: '🏷️' }
  ];
  */

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
    this.updateProducts();
  }

  updateProducts() {
    if (this.user.id) {
      const id = this.user.id;
      this.getProductsById(id);
    }
    
  }

  toggleProducts() {
    this.showProducts = !this.showProducts;
  }

  getProductsById(id: number) {
    this.productService.getProductsById(id).then(response => {
      console.log('Products by id', response);
      this.products = response;
    }).catch(error => {
      console.error('Error getting products by id', error);
    });
  }
}
