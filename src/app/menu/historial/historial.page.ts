import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  
  constructor( private authService: AuthService, private apiService: ApiService) { }

  historial: Array<any> = [];


  ngOnInit() {
    //buscar historial de usuario
    console.log(this.authService.usuario.email, this.authService.usuario.uid);
    this.buscarHistorial();
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
}
