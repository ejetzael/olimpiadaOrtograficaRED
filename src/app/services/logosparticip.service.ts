import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogosparticipService {

  private participantes:Valientes[] = [
    {
      logo: "assets/valientes/alarid.jpg",
      nombre: "Alarid"
    },
    {
      logo: "assets/valientes/alfonso-toro.jpg",
      nombre: "Alfonso Toro"
    },
    {
      logo: "assets/valientes/bosques-alba.jpg",
      nombre: "Bosques del Alba"
    },
    {
      logo: "assets/valientes/bosques-coahuila.jpg",
      nombre: "Bosques Coahuila"
    },
    {
      logo: "assets/valientes/colegio-azcapotzalco.jpg",
      nombre: "Colegio Azcapotzalco"
    },
    {
      logo: "assets/valientes/colegio-esparza.jpg",
      nombre: "Esparza"
    },
    {
      logo: "assets/valientes/colegio-saltillense.jpg",
      nombre: "Saltillense"
    },
    {
      logo: "assets/valientes/cristobal-colon-ags.jpg",
      nombre: "Cristobal Colón Aguascalientes"
    },
    {
      logo: "assets/valientes/el-abeto.jpg",
      nombre: "El Abeto"
    },
    {
      logo: "assets/valientes/el-mayab.jpg",
      nombre: "El Mayab"
    },
    {
      logo: "assets/valientes/emile-durkheim.jpg",
      nombre: "Emile Durkheim"
    },
    {
      logo: "assets/valientes/erasmo-castellanos-quinto.jpg",
      nombre: "Erasmo de Castellanos Quinto"
    },
    {
      logo: "assets/valientes/esigloxxi.jpg",
      nombre: "Siglo XXI"
    },
    {
      logo: "assets/valientes/esperanza.jpg",
      nombre: "Esperanza"
    },
    {
      logo: "assets/valientes/fray-victor-maria-flores.jpg",
      nombre: "Fray Victor María"
    },
    {
      logo: "assets/valientes/gran-union.jpg",
      nombre: "Gran Unión"
    },
    {
      logo: "assets/valientes/instituto-baluarte.jpg",
      nombre: "Instituto Baluarte"
    },
    {
      logo: "assets/valientes/instituto-mexico-secundaria.jpg",
      nombre: "Instituto México"
    },
    {
      logo: "assets/valientes/instituto-veracruz.jpg",
      nombre: "Instituto Veracruz"
    },
    {
      logo: "assets/valientes/jean-amos-komensky.jpg",
      nombre: "Jan Amos Komensky"
    },
    {
      logo: "assets/valientes/juventus.jpg",
      nombre: "Juventus"
    },
    {
      logo: "assets/valientes/la-paz-del-valle.jpg",
      nombre: "La Paz del Valle"
    },
    {
      logo: "assets/valientes/la-providencia.jpg",
      nombre: "La Providencia"
    },
    {
      logo: "assets/valientes/lideres-mexico.jpg",
      nombre: "Líderes de México"
    },
    {
      logo: "assets/valientes/maria-regina.jpg",
      nombre: "María Regina"
    },
    {
      logo: "assets/valientes/mercedes.jpg",
      nombre: "La Paz Querétaro"
    },
    {
      logo: "assets/valientes/mundo-hispano.jpg",
      nombre: "Mundo Hispano"
    },
    {
      logo: "assets/valientes/nicolas-guillen.jpg",
      nombre: "Nicolás Guillén Tlalnepantla"
    },
    {
      logo: "assets/valientes/nicolas-guillen.jpg",
      nombre: "Nicolás Guillén Toluca"
    },
    {
      logo: "assets/valientes/rocio-aidee-ruiz-garcia.jpg",
      nombre: "Mercedes"
    },
    {
      logo: "assets/valientes/sigloxxi.jpg",
      nombre: "Siglo XXI"
    },
    {
      logo: "assets/valientes/sumerhill-azcapotzalco.jpg",
      nombre: "Summerhill Azcaptozalco"
    },
    {
      logo: "assets/valientes/fray-victor-maria-flores.jpg",
      nombre: "Tepeyac San Cristobal"
    },
    {
      logo: "assets/valientes/trojes-kids.jpg",
      nombre: "Trojes Kids"
    },
    {
      logo: "assets/valientes/yacatia.jpg",
      nombre: "Yacatia"
    }
  ];

  constructor( ) {
    console.log("Entra servicio de logosParticpantes");
  }

  getParticipantes(){
    return this.participantes;
  }

}


export interface Valientes {
  logo: string;
  nombre: string;
}