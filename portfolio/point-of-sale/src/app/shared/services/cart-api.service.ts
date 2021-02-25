import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.interface';
import { CartAlbum } from '../models/cart-album.interface';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:3000/cart';

  cartItems: CartItem[] = [];
  cartAlbums: CartAlbum[] = [];

  getAllItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete/${id}`, {});
  }

  addItem(item: {}): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, item);
  }

  editItem(item: {}, id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/update/${id}`, item);
  }

  setCart(data: any) {
    data.forEach((c: any) => {
      const cartItem: CartItem = {
        id: c.cartid,
        quantity: c.quantity,
        albumId: c.albumid,
      };

      const cartAlbum: CartAlbum = {
        cartItem: cartItem,
        artistName: c.artistname,
        albumName: c.albumname,
        albumArtSource: c.albumartsource,
        price: c.price,
      };

      this.cartItems.push(cartItem);
      this.cartAlbums.push(cartAlbum);
    });
  }

  getCart() {
    this.getAllItems().subscribe((data) => {
      this.setCart(data);
    });
  }
}
