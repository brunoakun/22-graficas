import { Component } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';

// Datos para hacer 2 gráficos de barras 

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {

  barChartData: ChartData<'bar'> = {
    labels: ['vendedor 1', 'Vendedor 2', 'Vendedor 3'],
    datasets: [
      { data: [15, 40, 12], label: 'Producto 1' },
      { data: [65, 59, 80], label: 'Producto 2' },
      { data: [28, 48, 40], label: 'Producto 3' }
    ]
  };
  
  barChartData2: ChartData<'bar'> = {
    labels: ['2020', '2021', 'Año 2022', '2023', '2024', '2025', '2026'],
    datasets: [
      { data: [15, 40, 12, 5, 60, 74, 62], label: 'Series A', backgroundColor: '#220CF2' },
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' }
    ]
  };

}
