import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./estimator/estimator.module').then(m => m.EstimatorModule)},
  {path: 'estimates', loadChildren: () => import('./estimates/estimates.module').then(m => m.EstimatesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
