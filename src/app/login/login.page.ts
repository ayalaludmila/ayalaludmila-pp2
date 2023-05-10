import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public formBuilder: FormBuilder, private authSvc: AuthService, private router: Router) { }

  ionicForm: FormGroup;
  isSubmitted = false;

  ngOnInit(){
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ionViewWillEnter() {
    //document.getElementsByClassName('card-content-md').item(0).setAttribute('style','left: -45px;');
  }

  async onLogin(email, password){
    try {
      if (email.value != "" && password.value != "") {
        console.log(email.value ,  password.value);
        const user = await this.authSvc.login(email.value, password.value);
        if (user) {
          //chequear email verificado
          const isVerified = this.authSvc.isEmailVerified(user);
          this.redirecUser(isVerified);
        }
      }else{
        console.log('Ingresa mail y contraseña');
      }
    } catch (error) {
      console.log('Error -> ', error);
    }
  }

  async onLoginGoogle(){
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirecUser(isVerified);
      }
    } catch (error) {
      console.log('Error -> ', error);
    }
  }

  private redirecUser(isVerified: boolean){
    if (isVerified) {
      this.router.navigate(['menu']);
    }else{
      this.router.navigate(['verify-email']);
    }
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }
}
