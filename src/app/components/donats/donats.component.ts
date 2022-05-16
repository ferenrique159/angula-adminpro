import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-donats',
  templateUrl: './donats.component.html',
  styleUrls: ['./donats.component.css']
})
export class DonatsComponent  {

  @Input() title : string = 'Sin titulo'

  // Doughnut
  // Al cambiarle el nombre con el input puedo ayudar a renombrar en otros componentes la data sin alterar este
  @Input('labels') public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#002B71', '#738F00', '#890016' ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
