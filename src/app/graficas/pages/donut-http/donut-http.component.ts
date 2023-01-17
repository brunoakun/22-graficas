import { GraficosService } from './../../services/graficos.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css']
})
export class DonutHttpComponent implements OnInit {


  // Datos para gráfico de donut, capturados desde el servicio GraficosService:

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { data: [] }
    ]
  };

  loading: boolean = false;
  constructor(public _graficosSrv: GraficosService) { }

  ngOnInit(): void {
    this.loading = true;
    this._graficosSrv.getDataDonut()
      .subscribe(res => {
        this.loading = false;
        this.doughnutChartData = res;
      });
  }




}
