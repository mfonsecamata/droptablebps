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
    this.pieChartLabels = this.incidentesService.getPatologiasLabels();
    this.pieChartData = this.incidentesService.getPatologiasData();
  }



  // events
  public chartClicked(e:any):void {
    console.log(e);
    //this.incidentesService.setPatologia("neumonia");
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
