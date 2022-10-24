import { ChangeDetectorRef, Component } from '@angular/core';

import { Stripe } from '@ionic-native/stripe/ngx';

Component({
  selector: 'app-modal-example',
  templateUrl: 'ModalPaymentPage.html',
})

export class ModalPaymentPage {

  CLIENT_ID= 'id-A0EF-3dc427bc-da75-4de1-b913-c42e862d4165';
  CLIENT_SECRET= 'secret-a5d84df3-aef6-4c09-8eb6-f474bea4bfec';

  public paymentAmount: string;
  currency: string = 'ARS';
  currencyIcon: string = '$';
  stripe_key = 'pk_test_51LwDrRH8uh0NNNotZxF8CTRqqjGWzO5vhLBc9ZNsOlToFrbTtdO4OkT8nHrc5MxMQ32JykMjMaEf2hRaLE4lMvcP00OVfzzkEE';
  cardDetails: any = {};


constructor( private ref: ChangeDetectorRef, private stripe: Stripe) 
{ 


}

makePayment(tokenId: string){

}

payWithStripe(){
    
  this.stripe.setPublishableKey(this.stripe_key);

  this.cardDetails = {
    number: '4242424242424242',
    expMonth: 12,
    expYear: 2025,
    cvc: '220'
  }

  this.stripe.createCardToken(this.cardDetails)
  .then(token => {
    console.log(token);
    this.makePayment(token.id);
  })
  .catch(error => console.error(error));

}

}