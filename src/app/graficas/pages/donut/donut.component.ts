import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {

  constructor() { }

  // Datos para gráfico de donut:
  labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [350, 450, 100] }
    ]
  };

}
