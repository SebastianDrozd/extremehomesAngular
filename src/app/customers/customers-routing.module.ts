import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerspageComponent } from './customerspage/customerspage.component';


const routes: Routes = [
  {path : '', component: CustomerspageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
