import { Injectable } from '@angular/core';

import { AnimationController } from '@ionic/angular';
import { CartModel } from "./cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: CartModel[] = [];

  constructor( private animationCtrl: AnimationController ) { }

  deleteProductAnimation(product){
    var element = document.getElementById(product);
      this.animationCtrl.create() //const animation = this.animationCtrl.create()
      .addElement(element) 
      .duration(250)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0')
      .play();
  }

  addProduct(product: CartModel) {
    
    let added = false;
    for (const p of this.products) {
      if (p.id === product.id) {
        p.amount += product.amount;
        added = true;
        break;
      }
    }

    if (!added) {
      this.products.push(product);
    }
  }

  getProducts() {
    return [...this.products]
  }

  deleteProduct(productId: string) {
    
    const product = this.products.find(product => {
          return product.id == productId
        });
    
    if (product.amount > 1) {
      const index = this.products.findIndex((obj => obj.id == productId));
      return this.products[index].amount--;
    }else{
      this.deleteProductAnimation(productId);
      setTimeout(function(){ document.getElementById(productId).remove(); }, 250);
      this.products = this.products.filter(product => {
      return product.id !== productId});
    }
    return;
  }

  addAmount(productId: string){
    this.products.find(product => {
      return product.id == productId
    }).amount++;
  }

  updateTotal(){
    const totalHTML = document.getElementById("total");
    var total = parseInt(totalHTML.innerHTML);
    total = 0;
    for (let index = 0; index < this.products.length; index++) {
      var precioProducto = this.products[index].price;
      var cantidad = this.products[index].amount;
      total = total + (precioProducto * cantidad);
    }
    totalHTML.innerHTML = total.toString();
  }

  finalizarCompra(){

  }
}
