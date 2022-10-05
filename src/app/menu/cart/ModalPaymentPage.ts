import { ChangeDetectorRef, Component } from '@angular/core';
import { IAPProduct } from '@awesome-cordova-plugins/in-app-purchase-2';

//import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';


Component({
  selector: 'app-modal-example',
  templateUrl: 'ModalPaymentPage.html',
})

const PRODUCT_GEMS_KEY = '1';
const PRODUCT_PRO_KEY = '2';

export class ModalPaymentPage {

 gems = 0;
 isPRO = false;
 products: IAPProduct[] = [];

constructor( private ref: ChangeDetectorRef) 
{ 

  //this.registerProducts();
  //this.setupListeners();

}



/* 
registerProducts(){
  this.store.register({
    id: PRODUCT_GEMS_KEY,
    type: this.store.CONSUMABLE
  });

  this.store.register({
    id: PRODUCT_PRO_KEY,
    type: this.store.NON_CONSUMABLE
  });

  this.store.refresh();
}

setupListeners(){
  this.store.when('product').approved((p: IAPProduct) => {
    if (p.id === PRODUCT_PRO_KEY) {
      this.isPRO = true;
    }else if (p.id === PRODUCT_GEMS_KEY){
      this.gems+= 100;
    }

    this.ref.detectChanges();

    return p.verify();
  })
  .verified((p: IAPProduct) => p.finish());

  this.store.when
}
*/
}