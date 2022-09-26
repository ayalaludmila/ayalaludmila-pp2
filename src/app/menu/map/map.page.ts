import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('popover') popover;

  isOpen = false;

  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.geolocationNative();
  }


  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geoposition: GeolocationPosition) =>{
      console.log(geoposition);
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      //data.coords.latitude;
      // data.coords.longitude;
       console.log(data);
      });
    })
  }

  handleChange(e){
    const element = document.getElementById('img_mapa');
    const mapaTitle = document.getElementById('mapa_title');
    const map = document.getElementById('map');
    switch (e.detail.value) {
      case 'mapa1':
          mapaTitle.innerHTML = 'Mapa 1'; 
          element.setAttribute('src', '../../assets/icon/mapa1.jpg');
          element.setAttribute('usemap', 'map1');
          map.setAttribute('name', 'map1');
        break;
      
      case 'mapa2':
          mapaTitle.innerHTML = 'Mapa 2'; 
          element.setAttribute('src', '../../assets/icon/mapa2.jpg');
          element.setAttribute('usemap', 'map2');
          map.setAttribute('name', 'map2');
          break;

      case 'mapa3':
          mapaTitle.innerHTML = 'Mapa 3'; 
          element.setAttribute('src', '../../assets/icon/mapa3.jpg');
          element.setAttribute('usemap', 'map3');
          map.setAttribute('name', 'map3');
          break;

      default:
        break;
    }
    console.log(e.detail.value);
  }

  showProduct(p, e){
    const productoSeleccionado = "Producto " + p;
    this.presentPopover(e, productoSeleccionado);
  }

  presentPopover(e: Event, t: string) {
    
    this.popover.event = e;
    this.isOpen = true;
  }
}
