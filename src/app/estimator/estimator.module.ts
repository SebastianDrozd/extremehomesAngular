import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatorRoutingModule } from './estimator-routing.module';
import { EstimatorhomeComponent } from './estimatorhome/estimatorhome.component';
import { RecenttableComponent } from './estimatorhome/recenttable/recenttable.component';
import { ShortcutsComponent } from './estimatorhome/shortcuts/shortcuts.component';


@NgModule({
  declarations: [
    EstimatorhomeComponent,
    RecenttableComponent,
    ShortcutsComponent,
    
  ],
  imports: [
    CommonModule,
    EstimatorRoutingModule
  ]
})
export class EstimatorModule { }
