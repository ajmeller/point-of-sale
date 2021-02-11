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
      this.cartService.cart = data;
    });
  }

  ngOnInit(): void {
    this.getCart();
  }
}
