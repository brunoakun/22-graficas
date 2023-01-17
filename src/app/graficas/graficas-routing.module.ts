import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonutComponent } from './pages/donut/donut.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// LazzyLoad del módulo
const routes: Routes = [{
  path: '',
  children: [
    { path: 'barra', component: BarrasComponent },
    { path: 'barras-doble', component: BarrasDobleComponent },
    { path: 'donut', component: DonutComponent },
    { path: 'donut-http', component: DonutHttpComponent },
    { path: '**', redirectTo: 'barra' }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
