import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerspageComponent } from './customerspage/customerspage.component';
import { IndividualcustomerComponent } from './individualcustomer/individualcustomer.component';
import { CustomerRoutingModule } from './customers-routing.module';



@NgModule({
  declarations: [
    CustomerspageComponent,
    IndividualcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomersModule { }
