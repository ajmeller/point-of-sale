import { Component, OnInit } from '@angular/core';
import { Album } from '../shared/models/album.interface';
import { CartAlbum } from '../shared/models/cart-album.interface';
import { CartItem } from '../shared/models/cart-item.interface';
import { AlbumsApiService } from '../shared/services/albums-api.service';
import { CartApiService } from '../shared/services/cart-api.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private albumsService: AlbumsApiService,
    private cartService: CartApiService
  ) {}

  get cartItems(): CartItem[] {
    return this.cartService.cart;
  }

  get cartAlbums(): CartAlbum[] {
    return this.cartService.cartAlbums;
  }

  /*   cartItemToAlbum(cartItem: CartItem) {
    const album: Album = this.albumsService.albums.find((o) => {
      return (o.id = cartItem.albumId);
    });

    const newCartAlbum: CartAlbum = {
      cartId: cartItem.id,
      quantity: cartItem.quantity,
      albumId: cartItem.albumId,
      artistName: album.artistName,
      albumName: album.albumName,
      albumArtSource: album.albumArtSource,
      price: album.price,
    };

    this.cartService.cartAlbums.push(newCartAlbum);
  } */

  ngOnInit(): void {
    this.cartService.cart = [];
    this.cartService.getCart();
  }
}
