import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    ErrorComponent,
    NotFoundComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatBadgeModule,
    SharedModule,
   
  ],
  exports: [
    ErrorComponent,
    NotFoundComponent,
    HeaderComponent,
    MatBadgeModule,
  ]
})
export class CoreModule { }
