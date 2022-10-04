import { PayTabs } from '@awesome-cordova-plugins/paytabs/ngx';

@Component({
    selector: 'app-cart',
    templateUrl: './ModalPaymentPage.html',
  })

export class ModalPaymentPage {

constructor(private paytabs: PayTabs) { }

/*
billingDetails: PaymentSDKBillingDetails = {
   name: "John Smith",
   email: "email@domain.com",
   phone: "+201111111111",
   addressLine: "Address line",
   city: "Dubai",
   state: "Dubai",
   countryCode: "AE",
   zip: "1234"
 };
*/
 configuration: PaymentSDKConfiguration = {
   profileID: "*profile id*",
   serverKey: "*server key*",
   clientKey: "*cleint key*",
   cartID: "12345",
   currency: "USD",
   cartDescription: "Flowers",
   merchantCountryCode: "ae",
   merchantName: "Flowers Store",
   amount: 20,
   screenTitle:"Pay with Card",
   billingDetails: billingDetails
 }


startCardPayment(){
    this.paytabs.startCardPayment(this.configuration)
               .then(result => console.log(result))
               .catch(error => console.error(error));
}

startApplePayPayment(){
    this.paytabs.startApplePayPayment(this.configuration)
               .then(result => console.log(result))
               .catch(error => console.error(error));
}

startAlternativePaymentMethod(){
 this.paytabs.startAlternativePaymentMethod(this.configuration)
               .then(result => console.log(result))
               .catch(error => console.error(error));
}
   


}