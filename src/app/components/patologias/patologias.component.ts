import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import { IncidentesService } from '../../services/incidentes.service';

@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.component.html',
})

export class PatologiasComponent implements OnInit {

  patologiasAnios;

  constructor(
  private incidentesService:IncidentesService) { }

  ngOnInit() {
    this.patologiasAnios=this.incidentesService.getPatologiasAnios();
  }


  click1(){
    localStorage.setItem('patologia', 'gripe');
    location.reload();
  }

  click2(){
      localStorage.setItem('patologia', 'sacrolumbalgia');
      location.reload();
  }
  click3(){
      localStorage.setItem('patologia', 'neumonía');
      location.reload();
  }



}
