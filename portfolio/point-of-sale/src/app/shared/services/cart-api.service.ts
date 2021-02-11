import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:3000/cart-items';

  cart: CartItem[] = [];

  getAllItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addItem(item: CartItem) {
    return this.http.post(this.apiUrl, item);
  }
}
