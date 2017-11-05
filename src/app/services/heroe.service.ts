import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Rx';

import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroeService {

  selectedHeroe: Heroe = new Heroe();

   hoeroelist : AngularFireList<any>;

  nombres = ['Juan', 'Pedro', 'Maria', 'Jimena', 'Andrea', 'Pablo', 'Enrique', 'Veronica'];
  patologias= ['Neumonía', 'Sacrolumbalgia', 'Tendinitis', 'Conjuntivitis', 'Hepatitis', 'Glaucoma', 'Cólera', 'Gripe'];    
  empresas= ['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6', 'Empresa7', 'Empresa8'];
  domicilios= ['Domicilio1', 'Domicilio2', 'Domicilio3', 'Domicilio4', 'Domicilio5', 'Domicilio6', 'Domicilio7', 'Domicilio8'];
  factores= ['Factor1', 'Factor2', 'Factor3', 'Factor4', 'Factor5', 'Factor6', 'Factor7', 'Factor8'];
  rubros= ['Informática', 'Construcción', 'Salud', 'Comunales', 'Comercio', 'Policia','Ministerio Interior', 'Banco'];
  puestos= ['Puesto1', 'Puesto2', 'Puesto3', 'Puesto4', 'Puesto5', 'Puesto6', 'Puesto7', 'Puesto8'];
  coordenadas=[
    {
      "lat":"-33.3776764",
      "lng":"-54.6239086"
    } , {
      "lat":"-33.3633742",
      "lng":"-54.891784"
    } ,  {
      "lat":"-33.4022391",
      "lng":"-55.0518304"
    } , {
      "lat":"-34.5759072",
      "lng":"-56.0917713"
    } , {
      "lat":"-34.6000738",
      "lng":"-56.1269972"
    } , {
      "lat":"-34.8204546",
      "lng":"-56.1828327"
    } , {
      "lat":"-34.7975616",
      "lng":"-56.3088367"
    } , {
      "lat":"-34.8193854",
      "lng":"-56.3265089"
    } 
  ];
  

  //constructor() { console.log('inicializando constructor HeroService'); }

  constructor(private fireBase: AngularFireDatabase) { 
    console.log('inicializando constructor HeroService'); 
  }

  getHeroes(): Promise<Heroe[]> {        
    return Promise.resolve(HEROES);
}

getHeroesSlowly(): Promise<Heroe[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
}

addHeroes(heroe: Heroe){
  console.log(heroe);
  HEROES.push(heroe);
}

getData(){
  this.hoeroelist = this.fireBase.list('heroes');
  console.log(this.hoeroelist);
  return this.hoeroelist;
}


addHeroesFireBase(heroe: Heroe){
  this.hoeroelist.push({
    id: heroe.id,
    name: heroe.name,
    domicilio:heroe.domicilio,
    edad:heroe.edad,
    empresa:heroe.empresa,
    factor:heroe.factor,
    fecha:heroe.fecha,
    nombre:heroe.nombre,
    patologia:heroe.patologia,
    puesto:heroe.puesto,
    rubro:heroe.rubro,
    salario:heroe.salario,
    lat: heroe.lat,
    lng: heroe.lng,
    label: heroe.label,
    zoom: heroe.zoom,
  })
  
}

/* generando datos */
aleatorio(a,b) {
  return Math.round(Math.random()*(b-a)+parseInt(a));
}

addIncidente(){ 
  console.log('dgdfgfd');
  this.getData();
  console.log('aaaaaa');

  var y=this.aleatorio(0,7);

  this.hoeroelist.push({
    id:this.aleatorio(20,500),
    name: this.nombres[y],
    domicilio: this.domicilios[y],
    edad: this.aleatorio(20,60),
    empresa: this.empresas[y],
    factor: this.factores[y],    
    fecha: this.aleatorio(1,28)+"/"+this.aleatorio(1,12)+"/"+this.aleatorio(2014,2017),
    nombre: this.nombres[y],
    patologia: this.patologias[y],
    puesto: this.puestos[y],
    rubro: this.rubros[y],
    salario: this.aleatorio(1,3),       
    lat: this.coordenadas[y].lat,
    lng: this.coordenadas[y].lng,    
    label: this.empresas[y]+ "-"+ this.patologias[y],
    zoom:"10",
  })  
}

insertar(){  
  Observable.interval(60000).subscribe(x => {
    this.addIncidente()
  });
  
} 
  
}
