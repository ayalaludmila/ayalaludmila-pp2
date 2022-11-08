import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { SearchPage } from './search.page';

import { BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ApiService } from 'src/app/api.service';
import { CartModel } from '../cart/cart-model';


@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal.product.html',
  styleUrls: ['modal.product.scss']
})
export class ModalProduct {
    
  public data : CartModel;
  public qrData: BarcodeScanResult;
  public flag : boolean;
  public datas : Array<any> =
  [
 {id_producto: '1', descripcion: 'Aceite de girasol Natura 1.5L', precio: '320.00', categoria: '1', img_producto: 'https://ardiaprod.vtexassets.com/arquivos/ids/197858-500-auto?v=637559816874500000&width=500&height=auto&aspect=true', codigo_barra: '1234843578941'},
 
 {id_producto: '2', descripcion: 'Arroz Oro Estuche Gallo X1 Kg', precio: '217.00', categoria: '1', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/187241-500-auto?v=1753575503&width=500&height=auto&aspect=true', codigo_barra: '7456000108789'},

 { id_producto: '3', descripcion: 'Galletitas Oreo 182,5Gr', precio: '295.00', categoria: '1', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/231480-500-auto?v=1753575754&width=500&height=auto&aspect=true', codigo_barra: '7456000248789'},

 { id_producto: '4', descripcion: 'Harina De Trigo 0000 Cañuelas 1 Kg', precio: '86.00', categoria: '1', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/230399-500-auto?v=1753575294&width=500&height=auto&aspect=true', codigo_barra: '7456000388789'},

 { id_producto: '5', descripcion: 'Agua Mineral Eco de Los Andes Sin Gas 2L', precio: '173.00', categoria: '3', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/217009-500-auto?v=1753575238&width=500&height=auto&aspect=true', codigo_barra: '7456000528789'},
 
 { id_producto: '6', descripcion: 'Gaseosa Coca-Cola Sabor Original 2,5Lt', precio: '457.00', categoria: '3', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/228471-500-auto?v=1753576233&width=500&height=auto&aspect=true', codigo_barra: '7456000668789'},

 { id_producto: '7', descripcion: 'Jugo Naranja Citric 1,5L', precio: '532.00', categoria: '3', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/222725-500-auto?v=1753575560&width=500&height=auto&aspect=true', codigo_barra: '7456000808789'},
 
 { id_producto: '8', descripcion: 'Banana Ecuador Por Kg', precio: '299.00', categoria: '4', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/230802-500-auto?v=1753576534&width=500&height=auto&aspect=true', codigo_barra: '7456000948789'},
 
 { id_producto: '9', descripcion: 'Tomate Redondo Por Kg', precio: '269.00', categoria: '4', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/220809-500-auto?v=1753575390&width=500&height=auto&aspect=true', codigo_barra: '7456001088789'},
 
 { id_producto: '10', descripcion: 'Bondiola de Cerdo', precio: '1265.00', categoria: '7', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/226586-500-auto?v=1753571635&width=500&height=auto&aspect=true', codigo_barra: '7456001228789'},
 
 { id_producto: '11', descripcion: 'Suprema de Pollo', precio: '1299.00', categoria: '7', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/221137-500-auto?v=1753577025&width=500&height=auto&aspect=true', codigo_barra: '7456001368789'},

 { id_producto: '12', descripcion: 'Queso Cremon Cremoso La Serenisima Unidad 1Kg', precio: '899.00', categoria: '8', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/225421-500-auto?v=1753569909&width=500&height=auto&aspect=true', codigo_barra: '7456000108789'},
 
 { id_producto: '13', descripcion: 'Jamon Paladini Cocido Fetas Finas x200Gr', precio: '552.00', categoria: '8', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/210216-500-auto?v=1753577033&width=500&height=auto&aspect=true', codigo_barra: '7456000588789'},

 { id_producto: '14', descripcion: 'Leche Entera Clasica La Serenisima Sachet 1L', precio: '144.00', categoria: '11', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/184239-500-auto?v=1753577017&width=500&height=auto&aspect=true', codigo_barra: '7456001068789'},

 { id_producto: '15', descripcion: 'Yogurisimo Fort Vain Sachet 1000Gr', precio: '365.00', categoria: '11', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/232115-500-auto?v=1753577255&width=500&height=auto&aspect=true', codigo_barra: '7456001388789'},

 { id_producto: '35', descripcion: 'Chicle Topline Strawberry 14 Gr.', precio: '130.00', categoria: '1', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/225955-500-auto?v=1753338304&width=500&height=auto&aspect=true', codigo_barra: '7790580120573'},

 { id_producto: '36', descripcion: 'Desodorante Antibacterial Rexona Men 150 Ml.', precio: '475.00 ', categoria: '1', img_producto: 'https://diaio.vtexassets.com/arquivos/ids/228655-500-auto?v=1753820258&width=500&height=auto&aspect=true', codigo_barra: '7791293045078'},
 ];

  constructor(private modalCtrl: ModalController, public searchPage: SearchPage, private apiServide: ApiService) {}

  ngOnInit() {
    
    if (this.flag === true) {
      this.buscarQR();
      this.filtrarProducto(this.datas);
      document.getElementById("product.title").innerText = this.data.descripcion;
      document.getElementById("imageURL").setAttribute("src", this.data.img_producto);
    }else{
      document.getElementById("product.title").innerText = this.data.descripcion;
      document.getElementById("imageURL").setAttribute("src", this.data.img_producto);
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.data.amount = parseInt(document.getElementById("product.amount").innerText);
    return this.modalCtrl.dismiss(this.data, 'confirm');
  }

  addItem(){
    const cantidad = document.getElementById("product.amount");
    var numero = parseInt(cantidad.innerText);
    numero++
    cantidad.innerHTML = numero.toString();
  }

  decreaceItem(){
    const cantidad = document.getElementById("product.amount");
    var numero = parseInt(cantidad.innerText);
    if (numero > 1) {
      numero--;
      cantidad.innerHTML = numero.toString();
    }
  }

  buscarQR(){
    this.apiServide.obtenerProductos().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.datas = res;
    },(error: any) => {
      console.log("ERROR ===", error);
    });
  }

  filtrarProducto(productos: Array<any>){
    for (let index = 0; index < productos.length; index++) {
      if (productos[index].codigo_barra === this.qrData.toString() ) {
        this.data = productos[index];
      }
    }
  }
}