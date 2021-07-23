import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { EstimateshomeComponent } from './estimateshome/estimateshome.component';
import { EstimatestableComponent } from './estimateshome/estimatestable/estimatestable.component';
import { CreateestimateComponent } from './createestimate/createestimate.component';
import { CreatecustomerComponent } from './createestimate/createcustomer/createcustomer.component';
import { ProgressComponent } from './createestimate/progress/progress.component';
import { WorkComponent } from './createestimate/work/work.component';


@NgModule({
  declarations: [
    EstimateshomeComponent,
    EstimatestableComponent,
    CreateestimateComponent,
    CreatecustomerComponent,
    ProgressComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    EstimatesRoutingModule
  ]
})
export class EstimatesModule { }
