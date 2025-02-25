import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<any> {
    const url = this.http.post(`${this.apiUrl}/products/create`, product);
    console.log(this.apiUrl);
    return this.http.post(`${this.apiUrl}/products/create`, product);
  }
}
