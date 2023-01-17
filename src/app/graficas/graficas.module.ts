import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonutComponent } from './pages/donut/donut.component';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';

import { NgChartsModule } from 'ng2-charts';
import { GraficoDonutComponent } from './components/grafico-donut/grafico-donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonutComponent,
    DonutHttpComponent,
    GraficoBarraComponent,
    GraficoDonutComponent 
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }
