import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { ProductService } from "../cart/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor( private barcodeScanner: BarcodeScanner, private productService: ProductService) { }

  products2 = []

  producService = this.productService

  firtsLoad = false;
  ngOnInit() {
    if (this.firtsLoad === false) 
    {
      this.products2 = this.productService.getProducts();
      console.log("carga");
    }
    
  }

  leerCodigoBarra(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  addToCart(productId: string){
    const product = this.products2.find(product => {
      return product.id === productId
    });
    this.producService.addProduct(product);
    console.log("ok");
  }

}
