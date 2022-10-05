import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import  { Auth }  from "firebase/app";
import { User } from "../shared/user.interface";
import { GoogleAuthProvider } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth,
               //private auth : Auth
               ) { }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new GoogleAuthProvider());
      return user;
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail()
      return user;
    } catch (error) { console.log('Error ->', error)}
  }

  async login(email, password): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error ->', error)
    }
  } 

  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error ->', error)
    }
  }

}
