import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { DataRoutingModule } from './data-routing.module';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    SharedModule,
    DataRoutingModule,
  ]
})
export class DataModule { }
