import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { SearchPage } from './search.page';

import { CartModel } from '../cart/cart-model';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal.product.html',
})
export class ModalProduct {
    
  public data : CartModel;
  

  constructor(private modalCtrl: ModalController, public searchPage: SearchPage) {}

  ngOnInit() {
    document.getElementById("product.title").innerText = this.data.title;
    document.getElementById("imageURL").setAttribute("src", this.data.imageURL);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.data.amount = parseInt(document.getElementById("product.amount").innerText);
    return this.modalCtrl.dismiss(this.data, 'confirm');
  }

  addItem(){
    const cantidad = document.getElementById("product.amount");
    var numero = parseInt(cantidad.innerText);
    numero++
    cantidad.innerHTML = numero.toString();
  }

  decreaceItem(){
    const cantidad = document.getElementById("product.amount");
    var numero = parseInt(cantidad.innerText);
    if (numero > 1) {
      numero--;
      cantidad.innerHTML = numero.toString();
    }
  }
}