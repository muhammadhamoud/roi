import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CodesComponent } from './pages/codes/codes.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { SummaryComponent } from './pages/summary/summary.component';


@NgModule({
  declarations: [
    CodesComponent,
    EmptyComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    // CodesComponent,
    // EmptyComponent,
    // SummaryComponent
  ]
})
export class CartModule { }
