import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateshomeComponent } from './estimateshome/estimateshome.component';

const routes: Routes = [
  {path: '', component: EstimateshomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
