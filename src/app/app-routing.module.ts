import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimatesModule } from './estimates/estimates.module';

const routes: Routes = [
  {path: '', loadChildren: () => import('./estimator/estimator.module').then(m => m.EstimatorModule)},
  {path: 'estimates', loadChildren: () => EstimatesModule},
  {path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
