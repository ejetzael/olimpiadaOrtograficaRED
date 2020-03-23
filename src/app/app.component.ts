import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DialogLoginComponent } from './shared/dialog-login/dialog-login.component';
import { RecalendarizacionComponent } from './shared/recalendarizacion/recalendarizacion.component';
import { AuthfibService } from './services/authfib.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  opened:any = false;

  constructor( public dialog: MatDialog, 
          public auth: AuthfibService, 
          private router: Router ){
            console.log( "El usuario log es =", this.auth.estaAutenticado() );
            
          }

  openDialog(){
    console.log("lanzar openDialog");
    this.dialog.open( DialogLoginComponent );
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/convocatoria');
    console.log( "El usuario ahora es =", this.auth.estaAutenticado() );
  }

  ngOnInit() {

    this.dialog.open( RecalendarizacionComponent, {   panelClass: 'covid19' });

  }
}
