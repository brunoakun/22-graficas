# 22Graficas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Build 
ng build --base-href="./"

----------------------------
https://valor-software.com/ng2-charts/

--------------------------------------

1.- Crear módulo 
ng g module graficas --routing

2.- LazzyLoad del routing Child de gráficos
const routes: Routes = [{
  path: '',
  children: [
    { path: 'barra', component: BarrasComponent },
...

3.- npm install --save ng2-charts

4.- colores:
 https://color.adobe.com/es/create/color-wheel
