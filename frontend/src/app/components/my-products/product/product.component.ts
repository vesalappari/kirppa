import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() imageUrl: string | undefined;
  @Input() altText: string | undefined;
  @Input() title: string | undefined;
  @Input() price: number | undefined;
  @Input() status: string | undefined;
  @Input() showImage: boolean = true;
}
