import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CheckoutNavbarComponent } from './checkout-navbar/checkout-navbar.component';
import { ResultComponent } from './result/result.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';


@NgModule({
  declarations: [
    BillingDetailsComponent,
    CheckoutNavbarComponent,
    ResultComponent,
    ShippingDetailsComponent
  ],
  imports: [
    CommonModule,
    CheckOutRoutingModule
  ],
  exports: [
    BillingDetailsComponent,
    CheckoutNavbarComponent,
    ResultComponent,
    ShippingDetailsComponent
  ]
})
export class CheckOutModule { }
