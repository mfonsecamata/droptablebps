import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
//import { Heroe } from '../../services/heroe';
import { IncidentesService } from '../../services/incidentes.service';



@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  //providers: [HeroeService]
})
export class RubrosComponent implements OnInit {

  //rubros: Heroe[];

  //rubroLis : AngularFireList<Heroe>;
  //rubrosList =

  //selectedHero: Heroe;
  incidentes;


  constructor(
  private incidentesService:IncidentesService) { }

  getRubros(): void {
  //  this.heroeService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {

    this.incidentes = JSON.stringify(this.incidentesService.getIncidentes());


    //this.getHeroes();
    //this.heroeService.getData();

  }

}
