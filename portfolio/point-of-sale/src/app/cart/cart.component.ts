import { Component, OnInit } from '@angular/core';
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
    return this.cartService.cart;
  }

  getCart(): void {
    this.cartService.getAllItems().subscribe((data: any) => {
      data.forEach((i: any) => {
        const cartItem: CartItem = {
          id: i.id,
          quantity: i.quantity,
          albumId: i.albumid,
        };

        this.cartService.cart.push(cartItem);
      });
    });
  }

  ngOnInit(): void {
    this.getCart();
  }
}
