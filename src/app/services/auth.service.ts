import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from "../shared/user.interface";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastController } from '@ionic/angular';

import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable, of } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor( private afAuth: AngularFireAuth,
               private afs: AngularFirestore,
               private toastController: ToastController
               ) 
               { 
                this.user$ = this.afAuth.authState.pipe(
                  switchMap((user) => {
                    if (user) {
                      return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                    }
                    return of(null);
                  })
                )
               }

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
    } catch (error) { 
      console.log('Error ->', error);
      this.presentToast(error);
    }
  }

  async login(email, password): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.UpdateUserData(user);
      return user;
    } catch (error) {
      console.log('Error ->', error);
      this.presentToast(error);
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

  isEmailVerified(user: User): boolean{
    return user.emailVerified === true ? true : false;
  }


  private UpdateUserData(user:User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }

  async presentToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 3000,
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ],
    });

    await toast.present();
  }
}

/*
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != true;
    }
  }
}
*/