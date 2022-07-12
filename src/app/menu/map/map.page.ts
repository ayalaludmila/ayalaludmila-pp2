import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.geolocationNative();
  }

  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geoposition: GeolocationPosition) =>{
      console.log(geoposition);
    })
  }

}
