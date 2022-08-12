import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from "./product.service";
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @Input() producto: string

  products = []

  producService = this.productService

  constructor( private productService: ProductService , private animationCtrl: AnimationController ) { 
    
   }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }

  deleteProduct(product) {
    this.productService.deleteProduct(product);
    //this.productService.deleteProductAnimation(product);
    const producService = this.productService

    new Promise(function(resolve) {

      resolve(producService.deleteProductAnimation(product));
      
      }).then(function(result) {
      
        document.getElementById(product).remove();
      
      })
  }
}
