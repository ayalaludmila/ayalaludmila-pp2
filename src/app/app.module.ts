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

import { ComponentsModule } from "./components/menu/components.module";

import { LottieSplashScreen } from '@awesome-cordova-plugins/lottie-splash-screen/ngx';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';

import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';

import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [ComponentsModule, HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, SwiperModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule
  ],
  providers: [ SQLite, SQLitePorter, LottieSplashScreen, ProductService, BarcodeScanner, Geolocation, ModalProduct, SearchPage, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
