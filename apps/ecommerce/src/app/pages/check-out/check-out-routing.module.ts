import { ProductsComponent } from './products/products.component';
import { ResultComponent } from './result/result.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
// import { CheckOutComponent } from './../check-out/check-out.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: "checkouts",
    // component: CheckOutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: ProductsComponent,
        outlet: "checkOutlet",
      },
      {
        path: "shipping-details",
        component: ShippingDetailsComponent,
        outlet: "checkOutlet",
      },
      {
        path: "billing-details",
        component: BillingDetailsComponent,
        outlet: "checkOutlet",
      },
      {
        path: "result",
        component: ResultComponent,
        outlet: "checkOutlet",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckOutRoutingModule { }
