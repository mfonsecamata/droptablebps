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


  patologias = ["Empresas", "Neumonía","Sacrolumbalgia","Tendinitis","Conjuntivitis","Hepatitis","Glaucoma","Cólera","Gripe"];
  
  empresas = [
            {data:["Empresa1", "62","56","48","94", "65","56","78","0"]},
            {data:["Empresa2", "62","16","78","12", "65","56","78","0"]},
            {data:["Empresa3", "55","56","09","93", "65","56","1","99"]},
            {data:["Empresa4", "55","76","0","1", "65","56","78","23"]},
            {data:["Empresa5", "9","1","5","12", "65","56","78","45"]},
            {data:["Empresa6", "9","34","5","12", "65","56","1","6"]},
            {data:["Empresa7", "9","54","5","12", "65","56","78","0"]}];

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
        /*this.patologias.push("Empresas");
        for (var i = 0, j = this.hoeroelist.length; i < j; i++) {
          this.patologias.push(this.hoeroelist[i].patologia);          
        } */     
      });
  }  
}
