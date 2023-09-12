import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPie2dComponent } from './components/card-pie2d/card-pie2d.component';
import { Pie2dComponent } from './components/pie2d/pie2d.component';
import { FusionChartsModule } from 'angular-fusioncharts';



@NgModule({
  declarations: [
    CardPie2dComponent,    
    Pie2dComponent
  ],
  imports: [
    CommonModule,
    FusionChartsModule,
  ],
  exports: [
    CardPie2dComponent,    
    Pie2dComponent
  ]
})
export class SharedModule { }
