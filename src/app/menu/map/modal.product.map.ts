import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { CartModel } from '../cart/cart-model';
import { BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal.product.map.html',
})
export class ModalProductMap {
    
  public data : String;
  public qrData: BarcodeScanResult;
  public flag : boolean;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
      document.getElementById("product.title").innerText = this.data.toString();
      //document.getElementById("imageURL").setAttribute("src", this.data.imageURL);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}