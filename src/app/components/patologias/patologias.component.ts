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

}
