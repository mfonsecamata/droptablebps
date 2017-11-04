import { Component, OnInit } from '@angular/core';
import { IncidentesService } from '../../services/incidentes.service';

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
  constructor(private incidentesService: IncidentesService) { }

  ngOnInit() {
    this.barChartLabels = this.incidentesService.getPatologiasLabels();
    this.barChartData = [
      {data: this.incidentesService.getPatologiasLabels(), label: this.incidentesService.getPatologiasLabels()}
    ];
  
  }  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  } 

}
