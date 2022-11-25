import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalHistorial } from './modal.historial';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  
  constructor( private authService: AuthService, private apiService: ApiService, private modalCtrl: ModalController) { }

  historial: Array<any> = [];


  ngOnInit() {
    //buscar historial de usuario
    console.log(this.authService.usuario.email, this.authService.usuario.uid);
    console.log(this.historial);
  }

  ionViewWillEnter() {
    this.buscarHistorial();
  }

  buscarHistorial(){
    this.apiService.obtenerHistorial(this.authService.usuario.uid).subscribe((res:any) => {
      console.log("SUCCESS ===", res);
      this.historial = res;
      console.log(res);
    },(error: any) => {
      console.log("ERROR ===", error);
    });
  }

  async openModal(compra_id){
    const modal = await this.modalCtrl.create({
      component: ModalHistorial,
      componentProps: { 
        historial: this.historial,
        compraId : compra_id 
      }
    });
    
    modal.present();
    
    const { data, role } = await modal.onWillDismiss();

 
  }
}
