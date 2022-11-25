import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductMap } from "../map/modal.product.model";

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal.historial.html',
})
export class ModalHistorial implements OnInit {

    
    
  public historial : Array<any> = [];
  public productos : Array<any> = [];
  public compraId : string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const modal = document.getElementsByTagName('ion-modal').item(0);
    modal.setAttribute('style', '--min-height: 65%');
    modal.setAttribute('style', '--max-height: 75%');
    console.log(this.historial);
    this.historial.forEach(element => {
        this.productos.push(element.productos);
    });
  }

  ionViewDidLoad(){
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}