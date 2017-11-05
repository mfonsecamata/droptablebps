import { Component, OnInit } from '@angular/core';
import {Coordenada} from './coordenada';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  title: string = 'Integración google maps';
  lat: number = -34.9217344;
  lng: number = -56.1389295;
  
  coordenadas : Coordenada[]=[];
  coordenada1 : Coordenada;  
  coordenada2 : Coordenada;
  coordenadaSelect : Coordenada =new Coordenada();
  
  constructor() {    

   }
   
  ngOnInit() {

    this.coordenada1 = new Coordenada();
    this.coordenada1.lat=-34.9217344;
    this.coordenada1.lng=-56.1389295;
    this.coordenada1.label="Empresa de Elaboración de Productos Lacteos, Varadero S.A";

    this.coordenada2 = new Coordenada();
    this.coordenada2.lat=-34.8059635;
    this.coordenada2.lng=-56.2145634;
    this.coordenada2.label="Empacadora de Alimentos Ligeros. S.A";
    
    this.coordenadas.push(this.coordenada1);
    this.coordenadas.push(this.coordenada2);

  }

  markerClick(coordenada: Coordenada) {   

    console.log(coordenada.label);
    this.coordenadaSelect=coordenada
    //this.coordenadaSelect.label=coordenada.label;
   
  }

}
