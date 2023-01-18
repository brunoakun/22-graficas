import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

// Todo para hacer un gráfico de donut, excepto los datos que vendrán desde un @Input

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
