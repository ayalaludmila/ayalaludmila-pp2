import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from "./product.service";
import { Animation, AnimationController } from '@ionic/angular';

import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @Input() producto: string

  products = []

  producService = this.productService

  constructor( private productService: ProductService, private animationCtrl: AnimationController, private router: Router ) { 
    
   }

  ngOnInit() {
    //this.products = this.productService.getProducts()
  }

  deleteProduct(product) {
    this.productService.deleteProduct(product);
    //this.productService.deleteProductAnimation(product);
    const producService = this.productService
    //producService.deleteProductAnimation(product);
    document.getElementById(product).remove();
  }

  goToSearch() {
    this.router.navigate(['search']);
  }
}
