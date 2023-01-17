import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// Datos para hacer un gráfico de barras 

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', 'Año 2022', '2023', '2024', '2025', '2026'],
    datasets: [
      { data: [15, 40, 12, 5, 60, 74, 62], label: 'Series A', backgroundColor: '#220CF2' },
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' }
    ]
  };

}
