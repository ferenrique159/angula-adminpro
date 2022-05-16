import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NgChartsModule } from 'ng2-charts';


import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonatsComponent } from './donats/donats.component';

@NgModule({
  declarations: [
    IncrementadorComponent,
    DonatsComponent
  ],
  exports:[
    IncrementadorComponent,
    DonatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
