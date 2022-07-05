import { Component, OnInit } from '@angular/core';
import { ProductService } from "./product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  products = []

  constructor( private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }

}
