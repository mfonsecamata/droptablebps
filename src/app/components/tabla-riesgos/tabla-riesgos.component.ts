import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../services/heroe';



@Component({
  selector: 'app-tabla-riesgos',
  templateUrl: './tabla-riesgos.component.html',
  styleUrls: ['./tabla-riesgos.component.css']
})
export class TablaRiesgosComponent implements OnInit {

hoeroelist : Heroe[];


  //patologias = ["Empresas", "gripe","cancer","moco","loco","grip1e","cancer1","moco1","loco1","grip1e","cancer1","moco1","loco1","grip1e","cancer1","moco1","loco1"];
  patologias=[];
  empresas=[];

  riesgos = [
            {data:["Empresas0", "65","56","78","99", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas1", "65","56","78","99", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas2", "65","56","09","99", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas3", "65","76","78","1", "65","56","78","99", "65","56","78","99", "65","56","78","99"]},
            {data:["Empresas4", "9","34","5","12", "65","56","78","99", "65","56","78","99", "65","56","78","99"]}];
  constructor(

  private heroeService: HeroeService

  ) {

  }

  ngOnInit() {


  var x = this.heroeService.getData();
  x.snapshotChanges().subscribe(item=>{
  this.hoeroelist = [];
  item.forEach(element=>{
  var y = element.payload.toJSON();
    this.hoeroelist.push(y as Heroe);
  });

  console.log(this.hoeroelist);

  //this.anios = ["2013","2012","2015","2016","2017"]
  //this.data = [];
  //this.patologia= "gripe";
  //this.patologia=localStorage.getItem("patologia");
  //var soloPatologias= this.hoeroelist.filter(el =>
  //el.patologia == this.patologia);


  for (var i = 0, j = this.hoeroelist.length; i < j; i++) {
   this.patologias.push(this.hoeroelist[i].patologia);
   this.empresas.push(this.hoeroelist[i].empresa);
   }

   
});
  }


}
