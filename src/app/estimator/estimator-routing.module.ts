import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimatorhomeComponent } from './estimatorhome/estimatorhome.component';

const routes: Routes = [
  {path: '', component: EstimatorhomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatorRoutingModule { }
