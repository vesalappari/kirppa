import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}products/create`, product);
  }
}
