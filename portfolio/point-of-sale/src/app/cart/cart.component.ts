import { Component, OnInit } from '@angular/core';
import { CartAlbum } from '../shared/models/cart-album.interface';
import { CartItem } from '../shared/models/cart-item.interface';
import { CartApiService } from '../shared/services/cart-api.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartApiService) {}

  get cartItems(): CartItem[] {
    return this.cartService.cartItems;
  }

  get cartAlbums(): CartAlbum[] {
    return this.cartService.cartAlbums;
  }

  ngOnInit(): void {
    this.cartService.cartItems = [];
    this.cartService.getCart();
  }
}
