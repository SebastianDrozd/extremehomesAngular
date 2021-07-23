import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { EstimateshomeComponent } from './estimateshome/estimateshome.component';
import { EstimatestableComponent } from './estimateshome/estimatestable/estimatestable.component';


@NgModule({
  declarations: [
    EstimateshomeComponent,
    EstimatestableComponent
  ],
  imports: [
    CommonModule,
    EstimatesRoutingModule
  ]
})
export class EstimatesModule { }
