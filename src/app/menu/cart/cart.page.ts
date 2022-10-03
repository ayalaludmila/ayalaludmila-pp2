import { Component, Input, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { CartService } from './cart.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @Input() producto: string

  products = []

  public element: HTMLElement

  constructor( private cartService: CartService, private animationCtrl: AnimationController, private router: Router ) { 
    
   }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cartService.updateTotal();
  }

  ionViewWillEnter() {
    this.products = this.cartService.getProducts();
    this.cartService.updateTotal();
    this.addFinishButton()
  }

  deleteProduct(product) {
    this.cartService.deleteProduct(product);
    this.cartService.updateTotal();
    if (this.cartService.products.length === 0) {
      window.location.reload();
    }
  }

  goToSearch() {
    this.router.navigate(['search']);
  }

  addAmount(product){
    this.cartService.addAmount(product);
    this.cartService.updateTotal();
  }

  addFinishButton(){
    const button = document.getElementById("finishButton")
    if (this.cartService.products.length === 0) {
      button.style.display = "none";
    }else{
      button.style.display = "inline";
    }
  }
}
