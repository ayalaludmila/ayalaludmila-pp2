import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './cart.service';

import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ModalPaymentPage } from "./ModalPaymentPage";
import { Stripe } from '@ionic-native/stripe/ngx';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  CLIENT_ID= 'id-A0EF-3dc427bc-da75-4de1-b913-c42e862d4165';
  CLIENT_SECRET= 'secret-a5d84df3-aef6-4c09-8eb6-f474bea4bfec';

  public paymentAmount: string = '0';
  currency: string = 'ARS';
  currencyIcon: string = '$';
  stripe_key = 'pk_test_51LwDrRH8uh0NNNotZxF8CTRqqjGWzO5vhLBc9ZNsOlToFrbTtdO4OkT8nHrc5MxMQ32JykMjMaEf2hRaLE4lMvcP00OVfzzkEE';
  cardDetails: any = {};

  @Input() producto: string

  public products = []

  public element: HTMLElement

  public uid: string;


  constructor( 
    private cartService: CartService, 
    private router: Router,
    public modalCtrl: ModalController,
    private stripe: Stripe,
    private apiService: ApiService,
    private authService: AuthService
    ) { 
    
   }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cartService.updateTotal();
    this.checkUser();
  }

  ionViewWillEnter() {
    this.products = this.cartService.getProducts();
    this.cartService.updateTotal();
    this.addFinishButton();
    this.checkUser();
  }

  checkUser(){
    if (this.authService.usuario != null) {
      this.uid = this.authService.usuario.uid;
    }else{
      this.uid = 'false';
    }
    console.log(this.uid);
  }

  deleteProduct(product) {
    this.cartService.deleteProduct(product);
    this.cartService.updateTotal();
    if (this.cartService.products.length === 0) {
      window.location.reload();
    }
  }

  goToSearch() {
    this.router.navigate(['search']);
  }

  addAmount(product){
    this.cartService.addAmount(product);
    this.cartService.updateTotal();
  }

  addFinishButton(){
    const button = document.getElementById("finishButton")
    if (this.cartService.products.length === 0) {
      button.style.display = "none";
    }else{
      button.style.display = "inline";
    }
  }

  makePayment(tokenId: string){

  }

  async finalizarCompra(){
    const precio = document.getElementById("total").innerHTML;
    const modal = await this.modalCtrl.create({
      component: ModalPaymentPage,
      componentProps: { 
        paymentAmount: precio
      }
    });

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
    
    
    
    modal.present();
    const { data, role } = await modal.onWillDismiss();
      console.log(role);
    if(role != 'cancel'){
      const datas = {
        uid : this.uid,
        productos : JSON.stringify(this.products)
      };
      var jsonData = JSON.parse(datas.productos);
      if (this.uid != 'false') {
        this.filtrarDatosProductos(jsonData);
        datas.productos = JSON.stringify(jsonData);
        this.apiService.guardarCompra(datas).subscribe((res:any) => {
        console.log("SUCCESS ===", res);
      },(error: any) => {
        console.log("ERROR ===", error);
      });
      }
      
      this.cartService.finalizarCompra();
    }else{
      console.log('compra no guardada, usuario no logeado');
    }
  }

  filtrarDatosProductos(datas){
    for (let index = 0; index < datas.length; index++) {
      datas[index].img_producto = "";
      datas[index].codigo_barra = "";
      
    }
  }

}
