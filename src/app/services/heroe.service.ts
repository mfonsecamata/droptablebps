import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroeService {

  selectedHeroe: Heroe = new Heroe();

  hoeroelist : AngularFireList<any>;

  //constructor() { console.log('inicializando constructor HeroService'); }

  constructor(private fireBase: AngularFireDatabase) { console.log('inicializando constructor HeroService'); }

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
  
}
