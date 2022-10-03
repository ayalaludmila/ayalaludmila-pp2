import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { HttpClientModule } from '@angular/common/http';

import { ProductService } from "./menu/cart/product.service";

import { SearchPage } from './menu/search/search.page';

import { ModalProduct } from './menu/search/modal.product';

import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, SwiperModule],
  providers: [ProductService, BarcodeScanner, Geolocation, ModalProduct, SearchPage, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
