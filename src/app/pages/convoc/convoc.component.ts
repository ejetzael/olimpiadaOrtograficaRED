import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  actividad: string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {actividad: 'Publicación de la convocatoria', fecha: '24 febrero'},
  {actividad: 'Registro de docentes', fecha: '24 febrero al 6 de marzo'},
  {actividad: 'Recepción de material para Ronda 1 en los colegios', fecha: '16 al 20 de marzo'},
  {actividad: 'Eliminatoria Ronda 1 (Interna)', fecha: '23 al 27 de marzo'},
  {actividad: 'Los docentes envían el nombre del ganador por categoría por colegio. Los docentes reciben mail de confirmación', fecha: '30 de marzo al 3 de abril'},
  {actividad: 'Envío de usuario y contraseña para participantes de Ronda 2', fecha: '20 al 24 de abril'},
  {actividad: 'Aplicación del examen de Ronda 2', fecha: '28 de abril'},
  {actividad: 'Notificación de ganadores Ronda 2. Publicación de resultados en el sitio', fecha: '4 al 8 de mayo'},
  {actividad: 'Aplicación de examen de Ronda 3', fecha: '20 de mayo'},
  {actividad: 'Notificación a ganadores vía correo electrónico. Publicación de resultados en el sitio', fecha: '25 al 29 de mayo'},
  {actividad: 'Entrega de premios a ganadores', fecha: '1 al 26 de junio'},
];


@Component({
  selector: 'app-convoc',
  templateUrl: './convoc.component.html',
  styleUrls: ['./convoc.component.css']
})
export class ConvocComponent implements OnInit {


  displayedColumns: string[] = ['actividad', 'fecha'];
  dataSource = ELEMENT_DATA;

  
  constructor() { }

  ngOnInit() {
  }

}
