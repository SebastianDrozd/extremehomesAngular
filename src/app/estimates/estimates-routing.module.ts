import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecustomerComponent } from './createestimate/createcustomer/createcustomer.component';
import { CreateestimateComponent } from './createestimate/createestimate.component';
import { WorkComponent } from './createestimate/work/work.component';
import { EstimateshomeComponent } from './estimateshome/estimateshome.component';

const routes: Routes = [
  {path: '', component: EstimateshomeComponent },
  {path: 'createEstimate', component:CreateestimateComponent, children:[
    {path: '' , component: CreatecustomerComponent},
    {path: 'work', component : WorkComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
