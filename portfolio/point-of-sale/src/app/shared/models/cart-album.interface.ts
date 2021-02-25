import { CartItem } from './cart-item.interface';

export interface CartAlbum {
  cartItem: CartItem;
  artistName: string;
  albumName: string;
  albumArtSource: string;
  price: number;
}
