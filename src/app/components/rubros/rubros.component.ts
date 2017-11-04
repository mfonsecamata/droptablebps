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
  rubros;
  patologias;

  constructor(
  private incidentesService:IncidentesService) { }

  getRubros(): void {
  //  this.heroeService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {

    //this.patologias = this.incidentesService.getPatologias();
    //this.incidentes = this.incidentesService.getIncidentes();
    //this.rubros=this.incidentesService.getRubros();

    //var data = this.incidentesService.getRubros();
    //this.rubros=data.filter(
    //function(data){ return data.rubro == 'rubros' }
    //);
    //this.getHeroes();
    //this.heroeService.getData();

  }

}
