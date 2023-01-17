import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private http: HttpClient) { }

  getDataDonut() {
    // return (this.http.get<any>(`http://localhost:8080/datadonut`)
    return (this.http.get<any>(`https://sprint09.cerolab.com/datadonut`)
      .pipe(
        delay(1000),  // Pausa de 1 segundo
        map((res: any) => {
          // Transformar los datos de la API a un formato que se pueda utilizar en el gráfico
          return {
            labels: res.data.labels,
            datasets: [
              { data: res.data.dataset1 }
            ]
          };
        })
      )
    );
  }
}
