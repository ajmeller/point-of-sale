import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '', component: AlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
