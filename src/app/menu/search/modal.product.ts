import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { SearchPage } from './search.page';

import { CartModel } from '../cart/cart-model';
import { BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal.product.html',
})
export class ModalProduct {
    
  public data : CartModel;
  public qrData: BarcodeScanResult;
  public flag : boolean;

  constructor(private modalCtrl: ModalController, public searchPage: SearchPage) {}

  ngOnInit() {
    if (this.flag) {
      document.getElementById("product.title").innerText = this.qrData.text;
      document.getElementById("imageURL").setAttribute("src", this.qrData.text);
    }else{
      document.getElementById("product.title").innerText = this.data.title;
      document.getElementById("imageURL").setAttribute("src", this.data.imageURL);
    }
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