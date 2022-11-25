import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';
import { ProductMap } from './modal.product.model';


@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal.product.map.html',
})
export class ModalProductMap implements OnInit {
    
  public data : Array<ProductMap>;

  constructor(private modalCtrl: ModalController, private apiService: ApiService) {}

  ngOnInit() {
    const modal = document.getElementsByTagName('ion-modal').item(0);
    modal.setAttribute('style', '--min-height: 65%');
    modal.setAttribute('style', '--max-height: 75%');
  }

  ionViewDidLoad(){
  }

  cancel() {
    this.data = [];
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}