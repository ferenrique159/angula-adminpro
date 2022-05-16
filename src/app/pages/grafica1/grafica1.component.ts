import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  // Colocando estos label personalizados en este componente puedo cambiar ligeramente la data sin cambiar los principales
  public labels1: string[] = [ 'Descarga de ventas', 'otro1', 'otro2' ]
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 20, 50, 30 ],
        backgroundColor: [ '#002B71', '#738F00', '#890016' ] },
    ]
  };
}
