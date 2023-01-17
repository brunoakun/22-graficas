import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.css']
})
export class GraficoDonutComponent {

  @Input() doughnutChartData: ChartData<'doughnut'> = {
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

}
