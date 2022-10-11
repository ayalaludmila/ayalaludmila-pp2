import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProductMap } from './modal.product.map';

import imageMapResize from 'image-map-resizer';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('popover') popover;

  isOpen = false;

  constructor(public geolocation: Geolocation, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.geolocationNative();
  }

  ionViewDidLoad() {
    imageMapResize();
  }


  geolocationNative(){
    //this.geolocation.getCurrentPosition().then((geoposition: GeolocationPosition) =>{
     // console.log(geoposition);
     // let watch = this.geolocation.watchPosition();
    //  watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      //data.coords.latitude;
      // data.coords.longitude;
       //console.log(data);
     // });
   // })
  }

  handleChange(e){
    const element = document.getElementById('img_mapa');
    const mapaTitle = document.getElementById('mapa_title');
    const map = document.getElementById('map');
    switch (e.detail.value) {
      case 'mapa1':
          mapaTitle.innerHTML = 'Sucursal 1'; 
          element.setAttribute('src', '../../assets/icon/mapa1.jpg');
          element.setAttribute('usemap', '#map1');
          element.style.display = 'initial';
          map.setAttribute('name', 'map1');
        break;
      
      case 'mapa2':
          mapaTitle.innerHTML = 'Sucursal 2'; 
          element.setAttribute('src', '../../assets/icon/mapa2.jpg');
          element.setAttribute('usemap', '#map2');
          element.style.display = 'initial';
          map.setAttribute('name', 'map2');
          break;

      case 'mapa3':
          mapaTitle.innerHTML = 'Sucursal 3'; 
          element.setAttribute('src', '../../assets/icon/mapa3.jpg');
          element.setAttribute('usemap', '#map3');
          element.style.display = 'initial';
          map.setAttribute('name', 'map3');
          break;

      default:
        break;
    }
    console.log(e.detail.value);
  }

  showProduct(p, e){
    const productoSeleccionado = "Producto " + p;
    console.log(productoSeleccionado);
    this.openModal(productoSeleccionado);
  }

  presentPopover(e: Event, t: string) {
    
    this.popover.event = e;
    this.isOpen = true;
  }

  async openModal(product) {
    const modal = await this.modalCtrl.create({
      component: ModalProductMap,
      componentProps: { 
        data: product
      }
    });
    
    modal.present();
    
    const { data, role } = await modal.onWillDismiss();

 
  }

}
