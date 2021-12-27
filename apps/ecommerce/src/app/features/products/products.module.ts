import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

// import { ProductsRoutingModule } from './products-routing.module';

import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'product/:id', component: ProductComponent },
      { path: '', component: ProductListComponent }
    ]),
    LayoutModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    SharedModule
  ],
  exports: [
    // ProductComponent,
    // ProductListComponent
  ]
})
export class ProductsModule { }
