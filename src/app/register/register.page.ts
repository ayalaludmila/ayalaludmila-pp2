import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc: AuthService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  async onRegister(email, password){
    try {
      if (email.value != '' && password.value != '') {
        const user = await this.authSvc.register(email.value, password.value);
        if (user) {
          console.log("User --> ", user);
          //mostrar mensaje de usuario registrado y salir volver a la pantalla principal

          this.router.navigate(['/home']);
        }
      }else{
        const toast = await this.toastController.create({
          message: 'Usuario registrado',
          duration: 2000,
          cssClass: 'custom-toast'
        });
    
        await toast.present();
      }
      //redirigir a pagina de principal
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
      
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}
