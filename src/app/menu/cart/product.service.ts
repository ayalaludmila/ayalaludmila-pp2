import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: '1',
      title: 'producto 1',
      imageURL: 'https://jumboargentina.vteximg.com.br/arquivos/ids/693346-230-230/Madalenas-Rellenas-Ddl-Valente-180g-1-871306.jpg?v=637829769798300000',
      price: '100' 
    },
    {
      id: '2',
      title: 'producto 2',
      imageURL: 'https://jumboargentina.vteximg.com.br/arquivos/ids/640948-230-230/T-Taragui-S-e-Filtro-Diamantado-X-100saq-1-870732.jpg?v=637557379298100000',
      price: '120'
    },
    {
      id: '3',
      title: 'producto 3',
      imageURL: 'https://jumboargentina.vteximg.com.br/arquivos/ids/673954-230-230/Galletitas-Oreo-182-5g-1-858778.jpg?v=637711293977900000',
      price: '50'
    }
  ]

  constructor() { }

  getProducts() {
    return [...this.products]
  }

  getProduct(productId: string) {
    return {
      ...this.products.find(product => {
        return product.id === productId
      })
    }
  }
  /*
  addProduct(title: string, imageURL: string, price: string) {
    this.products.push({
      title,
      imageURL,
      price:,
      id: this.products.length + 1 + ""
    });
  }
*/
  deleteProduct(productId: string) {
    this.products = this.products.filter(product => {
      return product.id !== productId
    })
    this.products = this.getProducts()
  }
}
