import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { take, map } from "rxjs/operators";
import { ToastController } from '@ionic/angular';
import { CartService } from './menu/cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSvc: AuthService, private router: Router, private toast: ToastController, private cartService: CartService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSvc.user$.pipe(
      take(1),
      map(user => {
        if (user) {
          return true;
        }else{
          console.log('User -> ', user);
          this.mensajeLogout();
          //this.cartService.finalizarSesion();
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

  async mensajeLogout(){
    const mensaje = await this.toast.create({
      message: 'Necesita iniciar sesion para usar esta funcionalidad',
      duration:  1500, 
      position: 'bottom'
    });
    mensaje.present();
  }
  
}
