import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthfibService } from './authfib.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth:AuthfibService, private router:Router ){

  }

  canActivate( ): boolean {
    console.log('Guard');

    if( this.auth.estaAutenticado() ){
      return true;

    }else {
      this.router.navigateByUrl('/convocatoria');
      return false;
    }
  }
  
}
