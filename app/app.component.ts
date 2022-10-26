import { Component } from '@angular/core';
import { LottieSplashScreen } from '@awesome-cordova-plugins/lottie-splash-screen/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  
  constructor
  ( 
    private lottieSplashScreen: LottieSplashScreen,
    private platform : Platform
  ) 
    {
    this.initializeApp();
    }

  initializeApp(){
    this.lottieSplashScreen.show();
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.lottieSplashScreen.hide();
      }, 2000);
    })
  }

}
