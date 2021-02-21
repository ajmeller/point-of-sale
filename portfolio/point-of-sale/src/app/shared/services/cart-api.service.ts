import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:3000/cart';

  cart: CartItem[] = [];

  getAllItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteItem(id: number) {
    return this.http.post(`${this.apiUrl}/delete/${id}`, {});
  }

  addItem(item: CartItem) {
    return this.http.post(`${this.apiUrl}/add`, item);
  }

  editItem(id: number, item: CartItem) {
    return this.http.post(`${this.apiUrl}/update/${id}`, item);
  }
}
