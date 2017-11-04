import { Component, OnInit } from '@angular/core';
import { IncidentesService } from '../../services/incidentes.service';

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
  
  constructor(private incidentesService: IncidentesService) { }

  ngOnInit() {
    this.pieChartLabels = this.incidentesService.getPatologiasPrincipales().labels;
    this.pieChartData = this.incidentesService.getPatologiasPrincipales().data;
  }

  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
