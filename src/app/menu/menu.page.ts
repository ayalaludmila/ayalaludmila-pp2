import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CartService } from "./cart/cart.service";

import { SwiperModule } from 'swiper/angular';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import { take, map } from "rxjs/operators";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  imports: [ SwiperModule ],
  styleUrls: ['./menu.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuPage implements OnInit {

  public element: HTMLElement

  constructor( 
    public cartService: CartService , 
    public swiperModule: SwiperModule, 
    private menu: MenuController,
    private authServ: AuthService
    ) { }

  ngOnInit() {
    this.element = document.getElementById('cartBadge');
  }

  ionViewWillEnter() {

    var total = 0;
    
    for (const p of this.cartService.products) {
      total = total + p.amount; 
    }
    this.element.innerHTML = total.toString(); 
    
    
  }

  async openFirst() {
    this.menu.enable(true, 'first');
    
    await this.menu.open('first');
    this.menu.swipeGesture(false);
  }
  
  toggleMenu(){
    this.menu.toggle();
  }
}
