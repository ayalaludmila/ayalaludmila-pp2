import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CartService } from "./cart/cart.service";

import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  imports: [ SwiperModule ],
  styleUrls: ['./menu.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuPage implements OnInit {

  public element: HTMLElement

  

  constructor( public cartService: CartService , public swiperModule: SwiperModule) { }

  ngOnInit() {
    this.element = document.getElementById('cartBadge');
  }

  ionViewWillEnter() {
    var total = 0;
    
    for (const p of this.cartService.products) {
      total = total + p.amount; 
    }
    console.log(this.element.innerHTML);
    //this.element.innerHTML = this.cartService.products.length.toString();
    this.element.innerHTML = total.toString(); 
  }

}
