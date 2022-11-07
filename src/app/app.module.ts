import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { HttpClientModule } from '@angular/common/http';

import { ProductService } from "./menu/cart/product.service";

import { SearchPage } from './menu/search/search.page';

import { ModalProduct } from './menu/search/modal.product';

import { SwiperModule } from 'swiper/angular';

import { ComponentsModule } from "./components/menu/components.module";

import { LottieSplashScreen } from '@awesome-cordova-plugins/lottie-splash-screen/ngx';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';

import { Stripe } from "@ionic-native/stripe/ngx";

import { ModalPaymentPage } from "./menu/cart/ModalPaymentPage";

import { CommonModule } from '@angular/common';

import { ModalProductMap } from "./menu/map/modal.product.map";

@NgModule({
  declarations: [AppComponent, ModalProductMap],
  imports: [ComponentsModule, HttpClientModule, BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, SwiperModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule
  ],
  providers: [ ModalPaymentPage, Stripe, LottieSplashScreen, ProductService, BarcodeScanner, ModalProduct, SearchPage, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
