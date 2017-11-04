import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-doughnutchart',
  templateUrl: './grafica-doughnutchart.component.html',
  styleUrls: ['./grafica-doughnutchart.component.css']
})
export class GraficaDoughnutchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
