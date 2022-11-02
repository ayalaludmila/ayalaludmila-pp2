import { Component, OnInit } from '@angular/core';

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

  constructor( public modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
  
  }

  ionViewDidLoad() {
    imageMapResize();
  }

  handleChange(e){
    const element = document.getElementById('img_mapa');
    const mapaTitle = document.getElementById('mapa_title');
    const map = document.getElementById('map');
    const sector = document.getElementsByTagName('area');
    
    switch (e.detail.value) {
      case 'mapa1':
          mapaTitle.innerHTML = 'Sucursal 1'; 
          element.setAttribute('src', '../../assets/icon/mapa1.jpg');
          element.setAttribute('usemap', '#map1');
          element.style.display = 'initial';
          map.setAttribute('name', 'map1');
          sector.item(0).setAttribute('shape', 'rect');
          sector.item(0).setAttribute('coords', '94,27,358,165');
          sector.item(1).setAttribute('shape', 'rect');
          sector.item(1).setAttribute('coords', '76,176,342,274');
          sector.item(2).setAttribute('shape', 'poly');
          sector.item(2).setAttribute('coords', '189,289,363,286,410,261,444,257,446,430,401,433,347,401,194,398,192,345');
          sector.item(3).setAttribute('shape', 'poly');
          sector.item(3).setAttribute('coords', '128,407,125,505,227,503,263,538,306,540,314,428,209,419,171,393');
        break;
      
      case 'mapa2':
          mapaTitle.innerHTML = 'Sucursal 2'; 
          element.setAttribute('src', '../../assets/icon/mapa2.jpg');
          element.setAttribute('usemap', '#map2');
          element.style.display = 'initial';
          map.setAttribute('name', 'map2');
          sector.item(0).setAttribute('shape', 'rect');
          sector.item(0).setAttribute('coords', '70,282,16,59');
          sector.item(1).setAttribute('shape', 'rect');
          sector.item(1).setAttribute('coords', '163,261,82,74');
          sector.item(2).setAttribute('shape', 'rect');
          sector.item(2).setAttribute('coords', '175,59,231,285');
          sector.item(3).setAttribute('shape', 'rect');
          sector.item(3).setAttribute('coords', '38,28,209,51');
          break;

      case 'mapa3':
          mapaTitle.innerHTML = 'Sucursal 3'; 
          element.setAttribute('src', '../../assets/icon/mapa3.jpg');
          element.setAttribute('usemap', '#map3');
          element.style.display = 'initial';
          map.setAttribute('name', 'map3');
          sector.item(0).setAttribute('shape', 'rect');
          sector.item(0).setAttribute('coords', '112,12,535,152');
          sector.item(1).setAttribute('shape', 'rect');
          sector.item(1).setAttribute('coords', '509,198,535,588');
          sector.item(2).setAttribute('shape', 'rect');
          sector.item(2).setAttribute('coords', '125,163,455,617');
          sector.item(3).setAttribute('shape', 'rect');
          sector.item(3).setAttribute('coords', '11,118,106,560');
          break;

      default:
        break;
    }
    console.log(e.detail.value);
  }

  showProduct(p, e){
    const sectorSeleccionado = p;
    console.log(sectorSeleccionado);
    this.openModal(sectorSeleccionado);
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
