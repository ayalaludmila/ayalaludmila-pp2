import { Component, OnInit } from '@angular/core';

import { BarcodeScanner, BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';
//import { Toast } from '@awesome-cordova-plugins/toast/ngx';
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
    private modalCtrl: ModalController
    ) { }

  public items : Array<any> = [];

  products2 = [
    {
      id: '1',
      title: 'producto A',
      imageURL: 'https://jumboargentina.vteximg.com.br/arquivos/ids/693346-230-230/Madalenas-Rellenas-Ddl-Valente-180g-1-871306.jpg?v=637829769798300000',
      price: 100
    },
    {
      id: '2',
      title: 'producto B',
      imageURL: 'https://jumboargentina.vteximg.com.br/arquivos/ids/640948-230-230/T-Taragui-S-e-Filtro-Diamantado-X-100saq-1-870732.jpg?v=637557379298100000',
      price: 120
    },
    {
      id: '3',
      title: 'producto C',
      imageURL: 'https://jumboargentina.vteximg.com.br/arquivos/ids/673954-230-230/Galletitas-Oreo-182-5g-1-858778.jpg?v=637711293977900000',
      price: 50
    }
  ]

  producService = this.productService

  firtsLoad = false;
  ngOnInit() {
    if (this.firtsLoad === false) 
    {
      const searchbar = document.querySelector('ion-searchbar');
      searchbar.addEventListener('ionInput', this.handleInput);

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
      
      this.searchProduct(barcodeData)

     }).catch(err => {
         console.log('Error', err);
     });
  }

  async addToCart(product: CartModel){
    const cantidad1 = parseInt(document.getElementById("product.amount").innerText);
    
    this.cartService.addProduct(product);
    const toast = await this.toastController.create({
      message: 'Agregado',
      duration:  500, 
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

  async searchProduct(code: BarcodeScanResult) {
    //buscar producto en base de datos 
    const modal = await this.modalCtrl.create({
      component: ModalProduct,
      componentProps: { 
        data: code
      }
    });
  }  
}
