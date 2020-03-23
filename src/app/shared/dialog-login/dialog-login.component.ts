import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';


import { AuthfibService } from '../../services/authfib.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = true;


  constructor( private auth: AuthfibService, 
    private router : Router, 
    private dialog: MatDialog ) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

    if( localStorage.getItem('email') ){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }else {

    }

    // this.usuario.email = 'mail@serve.dom';
    // this.usuario.password = '123456';

  }

  onSubmitLog( form: NgForm ){

    // esta logica es para autentificar usuarios
    
    console.log( this.usuario );

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor.'
    });
    Swal.showLoading();
    
    this.auth.login( this.usuario )
      .subscribe( resp => {
        console.log( 'subscribe en login', resp );
        Swal.close();

        this.router.navigateByUrl('/evaluacion');

        // forzar a recordar a usuario
        localStorage.setItem('email', this.usuario.email);

        // cerrar el Dialog
        this.dialog.closeAll();

      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error al autentificar',
          text: err.error.error.message,
          icon: 'error'
        });
      });

      console.log( "El usuario ahora es =", this.auth.estaAutenticado() );
  }

  onSubmitNews( form: NgForm ) {

    // esta logica es para crear nuevo usuarios

    console.log( this.usuario );
    console.log( form );

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor.'
    });
    Swal.showLoading();
    
    this.auth.nuevoParticipante( this.usuario )
      .subscribe( resp => {
        console.log( resp );
        Swal.close();
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error al autentificar',
          text: err.error.error.message,
          icon: 'error'
        });
      });
  }

  notengo() {
    console.log("ya me canse, luego veo el Show/Hide este texto");
    
  }

}
