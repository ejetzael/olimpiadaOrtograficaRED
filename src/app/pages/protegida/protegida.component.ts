import { Component, OnInit } from '@angular/core';
import { AuthfibService } from 'src/app/services/authfib.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  constructor( private auth: AuthfibService, private router: Router ) { }

  ngOnInit() {
    console.log("ngOnInit protegida");
     
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/convocatoria');
    console.log( "El usuario ahora es =", this.auth.estaAutenticado() );
  }

}
