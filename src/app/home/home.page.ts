import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}


  checkUserPassword(mail: HTMLInputElement, password: HTMLInputElement){
    if (mail.value == 'admin' && password.value == '12345') {
      this.router.navigate(['/menu']);
    }else{
      alert('Usuario y/o contraseña incorrectos')
    }
    
  }

  registerPage(){
    this.router.navigate(['/register-page']);
  }
}
