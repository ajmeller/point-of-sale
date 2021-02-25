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

  get cartItems(): CartItem[] {
    return this.cartService.cartItems;
  }

  getAlbums() {
    this.albumsService.getAllAlbums().subscribe((data: any) => {
      data.forEach((a: any) => {
        const album = {
          id: a.albumid,
          artistName: a.artistname,
          albumName: a.albumname,
          albumArtSource: a.albumartsource,
          price: a.price,
        };
        this.albumsService.albums.push(album);
      });
    });
  }

  addToCart(albumId: number) {
    const cartItem = this.cartService.cartItems.find((o) => {
      return o.albumId === albumId;
    });

    if (cartItem) {
      this.cartService
        .editItem(
          {
            cartid: cartItem.id,
            quantity: cartItem.quantity + 1,
            albumid: cartItem.albumId,
          },
          cartItem.id
        )
        .subscribe((data: any) => {
          console.log(data);

          this.cartService.getCart();
        });
    } else {
      this.cartService
        .addItem({ quantity: 1, albumid: albumId })
        .subscribe(() => {});
    }
  }

  ngOnInit(): void {
    this.albumsService.albums = [];
    this.getAlbums();
    this.cartService.getCart();
  }
}
