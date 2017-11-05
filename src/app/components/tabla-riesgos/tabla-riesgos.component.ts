import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';


@Component({
  selector: 'app-tabla-riesgos',
  templateUrl: './tabla-riesgos.component.html',
  styleUrls: ['./tabla-riesgos.component.css']
})
export class TablaRiesgosComponent implements OnInit {

  patologias = ["Empresas", "gripe","cancer","moco","loco","grip1e","cancer1","moco1","loco1","grip1e","cancer1","moco1","loco1","grip1e","cancer1","moco1","loco1"];  
  riesgos = [
            {data:["Empresas0", "65","56","78","99", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas1", "65","56","78","99", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas2", "65","56","09","99", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas3", "65","76","78","1", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas4", "9","34","5","12", "65","56","78","99", "65","56","78","99", "65","56","78","99"]}];  
  constructor() {
   
  }

  ngOnInit() {
  }
}
