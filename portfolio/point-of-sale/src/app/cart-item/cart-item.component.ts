import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../shared/models/cart-item.interface';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  constructor() {}

  @Input() cartItem: CartItem = { product: '', price: 0, quantity: 0 };

  ngOnInit(): void {}
}
