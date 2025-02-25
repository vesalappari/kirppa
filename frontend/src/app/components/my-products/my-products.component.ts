import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from "./create-product/create-product.component";

@Component({
  selector: 'app-my-products',
  imports: [ProductComponent, FormsModule, CommonModule, CreateProductComponent],
  templateUrl: './my-products.component.html',
  styleUrl: '../../../styles.css'
})
export class MyProductsComponent {
  showImages: boolean = true;
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
}
