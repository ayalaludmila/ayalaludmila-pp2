import { Component, OnInit } from '@angular/core';


import { Product } from './cart/product.model';
import { ProductService } from "./cart/product.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public element: HTMLElement

   products = []

  constructor( private productService: ProductService ) { }

  ngOnInit() {
    //this.products = this.productService.getProducts();
    this.element = document.getElementById('cartBadge');
  }

  ionViewWillEnter() {
    
    this.element.innerHTML = this.products.length.toString();
    console.log(this.element.innerHTML);
   }

}
