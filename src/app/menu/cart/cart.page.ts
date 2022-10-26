import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './cart.service';

import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ModalPaymentPage } from "./ModalPaymentPage";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {



  @Input() producto: string

  products = []

  public element: HTMLElement



  constructor( 
    private cartService: CartService, 
    private router: Router,
    public modalCtrl: ModalController
    ) { 
    
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

  makePayment(tokenId: string){

  }

  async finalizarCompra(){
    console.log('finalizar');
    const precio = document.getElementById("total").innerHTML;
    const modal = await this.modalCtrl.create({
      component: ModalPaymentPage,
      componentProps: { 
        paymentAmount: precio
      }
    });

    modal.present();
    
    const { data, role } = await modal.onWillDismiss();
  }

}
