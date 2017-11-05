import { Component, OnInit } from '@angular/core';
import { IncidentesService } from '../../services/incidentes.service';

import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../services/heroe';


@Component({
  selector: 'app-grafic-barchar',
  templateUrl: './grafic-barchar.component.html',
  styleUrls: ['./grafic-barchar.component.css']
})
export class GraficBarcharComponent implements OnInit {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[];
  constructor(private incidentesService: IncidentesService,

  private heroeService: HeroeService
  ) { }

  anios;
  patologia=localStorage.getItem("patologia");
  data;

  hoeroelist : Heroe[];


  ngOnInit() {


  var x = this.heroeService.getData();
  x.snapshotChanges().subscribe(item=>{
  this.hoeroelist = [];
  item.forEach(element=>{
  var y = element.payload.toJSON();
    this.hoeroelist.push(y as Heroe);
  });


  this.anios = ["2013","2012","2015","2016","2017"]
  this.data = [];
  this.patologia= "gripe";
  var soloPatologias= this.hoeroelist.filter(el =>
  el.patologia == this.patologia);
  for (var i = 0, j = this.anios.length; i < j; i++) {
   var soloAnios=soloPatologias.filter(
   el => el.fecha.split("/")[2] == this.anios[i]
   )
   this.data.push(soloAnios.length)
   }

   this.barChartLabels = this.anios;
   this.barChartData = [
     {data: this.data, label: this.patologia}
   ];
});
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
