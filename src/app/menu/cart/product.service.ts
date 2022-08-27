import { ElementRef, Injectable, QueryList, ViewChildren } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @ViewChildren('templateProduct', {read: ElementRef}) templateListRef: QueryList<ElementRef>;

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

  constructor( private animationCtrl: AnimationController ) { }

  deleteProductAnimation(product){
    var element = document.getElementById(product);
      this.animationCtrl.create() //const animation = this.animationCtrl.create()
      .addElement(element) 
      .duration(500)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0')
      .play();
  }

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
  
  addProduct(product: Product) {
    this.products.push(product);
    /*
    {
      id: this.products.length + 1 + "",
      title,
      imageURL,
      price
    }
    */
  }

  deleteProduct(productId: string) {
    this.products = this.products.filter(product => {
      return product.id !== productId
    })
    this.products = this.getProducts();
    console.log(this.getProducts());
  }
}
