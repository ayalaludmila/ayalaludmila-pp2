import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { ProductService } from "../cart/product.service";

// para realizar la conexion a la base de datos
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor( private barcodeScanner: BarcodeScanner, private productService: ProductService,
               public http: HttpClient) { }

   /**
    * @id items
    * @title {Array} 
    * @imageURL
    * @price     Used to store returned PHP data
    */
    public items : Array<any> = [];

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

  ionViewWillEnter() : void
   {
      this.load();
   }

  /**
    * Retrieve the JSON encoded data from the remote server
    * Using Angular's Http class and an Observable - then
    * assign this to the items array for rendering to the HTML template
    */
   load() : void
   {
      this.http
      .get('http://localhost/getProductos.php')
      .subscribe((data : any) => 
      {
         console.dir(data);
         this.items = data;			
      },
      (error : any) =>
      {
         console.dir(error);
      });
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
