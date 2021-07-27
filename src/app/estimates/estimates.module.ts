import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { EstimateshomeComponent } from './estimateshome/estimateshome.component';
import { EstimatestableComponent } from './estimateshome/estimatestable/estimatestable.component';
import { CreateestimateComponent } from './createestimate/createestimate.component';
import { CreatecustomerComponent } from './createestimate/createcustomer/createcustomer.component';
import { ProgressComponent } from './createestimate/progress/progress.component';
import { WorkComponent } from './createestimate/work/work.component';
import { AdditionalinfoComponent } from './createestimate/additionalinfo/additionalinfo.component';
import { PicturesComponent } from './createestimate/pictures/pictures.component';
import { SummaryComponent } from './createestimate/summary/summary.component';
import { FormsModule } from '@angular/forms';
import { ImagegridComponent } from './createestimate/pictures/imagegrid/imagegrid.component';


@NgModule({
  declarations: [
    EstimateshomeComponent,
    EstimatestableComponent,
    CreateestimateComponent,
    CreatecustomerComponent,
    ProgressComponent,
    WorkComponent,
    AdditionalinfoComponent,
    PicturesComponent,
    SummaryComponent,
    ImagegridComponent
  ],
  imports: [
    CommonModule,
    EstimatesRoutingModule,
    FormsModule,

  ]
})
export class EstimatesModule { }
