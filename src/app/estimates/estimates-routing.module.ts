import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalinfoComponent } from './createestimate/additionalinfo/additionalinfo.component';
import { CreatecustomerComponent } from './createestimate/createcustomer/createcustomer.component';
import { CreateestimateComponent } from './createestimate/createestimate.component';
import { PicturesComponent } from './createestimate/pictures/pictures.component';
import { SummaryComponent } from './createestimate/summary/summary.component';
import { WorkComponent } from './createestimate/work/work.component';
import { EstimateshomeComponent } from './estimateshome/estimateshome.component';

const routes: Routes = [
  {path: '', component: EstimateshomeComponent },
  {path: 'createEstimate', component:CreateestimateComponent, children:[
    {path: '' , component: CreatecustomerComponent},
    {path: 'work', component : WorkComponent },
    {path: 'additional-info', component:AdditionalinfoComponent},
    {path: 'pictures', component:PicturesComponent},
    {path: 'summary', component: SummaryComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
