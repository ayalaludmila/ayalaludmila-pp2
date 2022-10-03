import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkNewUser(mail: HTMLInputElement, password: HTMLInputElement, password2: HTMLInputElement){
    console.log("ok registro");
  }

  registerPage(){
    console.log("ok")
  }
}
