import { ChangeDetectorRef, Component } from '@angular/core';
declare var Stripe;
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { CartService } from "./cart.service";

@Component({
  selector: 'app-modal-example',
  templateUrl: 'ModalPaymentPage.html',
  styleUrls: ['ModalPaymentPage.scss']
})

export class ModalPaymentPage {

  card: any;

  stripe = Stripe('pk_test_51LwDrRH8uh0NNNotZxF8CTRqqjGWzO5vhLBc9ZNsOlToFrbTtdO4OkT8nHrc5MxMQ32JykMjMaEf2hRaLE4lMvcP00OVfzzkEE');

  toast: any;

constructor(  
  private alertCtrl: AlertController, 
  private ref: ChangeDetectorRef, 
  private modalCtrl: ModalController, 
  private toastController: ToastController) 
{ 


}

ngOnInit() {
  this.setupStripe();
  //document.getElementsByTagName('ion-modal').item(0).setAttribute('id', 'modalStripe');
  const modal = document.getElementsByTagName('ion-modal').item(0);
  modal.setAttribute('style', '--min-height: 65%');
  modal.setAttribute('style', '--max-height: 75%');
}

makePayment(tokenId: string){

}


cancel() {
  return this.modalCtrl.dismiss(null, 'cancel');
}

async setupStripe() {
  let elements = this.stripe.elements();
  var style = {
    base: {
      color: '#32325d',
      lineHeight: '24px',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };

  this.card = elements.create('card', { style: style });
  console.log(this.card);
  this.card.mount('#card-element');

  this.card.addEventListener('change', event => {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = '';
    }
  });

  var form = document.getElementById('payment-form');
  form.addEventListener('submit', event => {
    event.preventDefault();

    this.stripe.createSource(this.card).then(result => {
      if (result.error) {
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        this.showAlert();
        this.modalCtrl.dismiss(null, 'paidout');
      }
    });
  });
}

async showAlert(){
  this.toast = await this.toastController.create({
    message: 'Pago realizado correctamente',
    duration:  2500, 
    position: 'bottom',
    color: 'success'
  });

  this.toast.present()

}

}