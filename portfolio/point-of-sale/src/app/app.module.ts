import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AlbumsComponent } from './albums/albums.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    AlbumsComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
