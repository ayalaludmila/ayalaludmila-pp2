import { Component, OnInit } from '@angular/core';

import { BarcodeScanner, BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ProductService } from "../cart/product.service";

import { ToastController } from '@ionic/angular';

// para realizar la conexion a la base de datos
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart/cart.service';

// para controlar ventana modal
import { ModalController } from '@ionic/angular';
import { ModalProduct } from './modal.product';

import { Product } from "../cart/product.model";
import { CartModel } from "../cart/cart-model";

import { ApiService } from "../../api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor( 
    private barcodeScanner: BarcodeScanner, 
    public productService: ProductService,
    public http: HttpClient, 
    public toastController: ToastController, 
    public cartService: CartService,
    private modalCtrl: ModalController,
    private apiService: ApiService
    ) { }

  public barcode_flag = false;

  public items : Array<any> = [];

  products2 : Array<any>

  producService = this.productService

  firtsLoad = false;
  ngOnInit() {
    //document.getElementsByTagName('ion-modal').item(0).setAttribute('class', 'ion-modal');
    if (this.firtsLoad === false) 
    {
      const searchbar = document.querySelector('ion-searchbar');
      searchbar.addEventListener('ionInput', this.handleInput);
      const productList = this.apiService.obtenerProductos().subscribe((res:any) => {
        console.log("SUCCESS ===", res);
        this.products2 = res;
        console.log(this.products2);
      },(error: any) => {
        console.log("ERROR ===", error);
      });
    }
    
  }

  handleInput(event) {
    this.items = Array.from(document.querySelector('ion-list').children);
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      
      this.items.forEach((item) => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
    
  }

  leerCodigoBarra(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcode_flag = true
      this.searchProduct(barcodeData, this.barcode_flag)

     }).catch(err => {
         console.log('Error', err);
     });
  }

  async addToCart(product: CartModel){
    const cantidad1 = parseInt(document.getElementById("product.amount").innerText);
    
    this.cartService.addProduct(product);
    const toast = await this.toastController.create({
      message: 'Agregado',
      duration:  700, 
      position: 'bottom'
    });
    toast.present();

  }

  sendProduct(productId: string){

    const product = this.products2.find(product => {
      return product.id === productId
    });
    
  }

  async openModal(product: Product) {
    const modal = await this.modalCtrl.create({
      component: ModalProduct,
      componentProps: { 
        data: product
      }
    });
    
    modal.present();
    
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.addToCart(data);
    }
  }

  async searchProduct(code: BarcodeScanResult , bFlag: boolean) {
    //buscariamos producto en base de datos 
    const modal = await this.modalCtrl.create({
      component: ModalProduct,
      componentProps: { 
        qrData: code,
        flag: bFlag
      }
    });
  }  
}
