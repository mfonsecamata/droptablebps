import { Component, OnInit } from '@angular/core';
import { IncidentesService } from '../../services/incidentes.service';

import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../services/heroe';

import {GraficBarcharComponent} from '../grafic-barchar/grafic-barchar.component';



@Component({
  selector: 'app-grafica-piechart',
  templateUrl: './grafica-piechart.component.html',
  styleUrls: ['./grafica-piechart.component.css']
})
export class GraficaPiechartComponent implements OnInit {

  // Pie
  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string = 'pie';

  hoeroelist : Heroe[];


 labels;
 data;

  constructor(
  private incidentesService: IncidentesService,
  private heroeService: HeroeService,
  //private graficBarcharComponent: GraficBarcharComponent,


  ) { }

  ngOnInit() {
      var x = this.heroeService.getData();
      console.log("x");
      console.log(x);
      x.snapshotChanges().subscribe(item=>{
          this.hoeroelist = [];
          item.forEach(element=>{
            var y = element.payload.toJSON();
            //y["id"]= element.key;
            this.hoeroelist.push(y as Heroe);
          });

            this.labels=[];
            this.data=[];
            var arr = this.hoeroelist;
            var obj = { };
            for (var i = 0, j = arr.length; i < j; i++) {
              obj[arr[i].patologia] = (obj[arr[i].patologia] || 0) + 1;
            }
            //console.log(obj);
            for(var item2 in obj){
              this.labels.push(item2)
              this.data.push(obj[item2])
            }
           this.pieChartLabels = this.labels;
           this.pieChartData = this.data;
        });

      //this.pieChartLabels = this.incidentesService.getPatologiasLabels();
      //this.pieChartData = this.incidentesService.getPatologiasData();

  }

  // events
  public chartClicked(e:any):void {
    console.log(this.labels[e["active"][0]["_index"]]);
    localStorage.setItem("patologia",this.labels[e["active"][0]["_index"]]);

    window.location.reload();

    //this.graficBarcharComponent.data="asda";

    this.heroeService.getData();

    //location.reload();
    //this.incidentesService.setPatologia("neumonia");
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
