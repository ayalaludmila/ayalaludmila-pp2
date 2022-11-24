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

  async initializeApp(){
    await this.platform.ready();

    const lottie = (window as any).lottie;

    if (this.platform.is('android') && lottie) {
      await this.lottieSplashScreen.hide();
      await this.lottieSplashScreen.show('../assets/splash.json', false);
    }

  }

}
