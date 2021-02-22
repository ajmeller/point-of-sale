import { Component, OnInit } from '@angular/core';
import { Album } from '../shared/models/album.interface';
import { CartItem } from '../shared/models/cart-item.interface';
import { AlbumsApiService } from '../shared/services/albums-api.service';
import { CartApiService } from '../shared/services/cart-api.service';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  constructor(
    private albumsService: AlbumsApiService,
    private cartService: CartApiService
  ) {}

  get albums(): Album[] {
    return this.albumsService.albums;
  }

  getAlbums() {
    this.albumsService.getAllAlbums().subscribe((data: any) => {
      data.forEach((a: any) => {
        const album = {
          id: a.id,
          artistName: a.artistname,
          albumName: a.albumname,
          albumArtSource: a.albumartsource,
          price: a.price,
        };
        this.albumsService.albums.push(album);
      });
    });
  }

  addToCart(album: Album) {
    const cart = this.cartService.cart;
    const cartItem = cart.find((o) => {
      return o.albumId === album.id;
    });

    if (cartItem) {
      this.cartService.editItem(cartItem.id, {
        id: cartItem.id,
        quantity: cartItem.quantity + 1,
        albumId: cartItem.albumId,
      });
      console.log('edit cart item');
    } else {
      const newCartItem: CartItem = {
        id: 3,
        quantity: 1,
        albumId: album.id,
      };
      this.cartService.addItem(newCartItem);
      console.log('add to cart');
    }
  }

  ngOnInit(): void {
    this.albumsService.albums = [];
    this.getAlbums();
    this.cartService.getCart();
  }
}
