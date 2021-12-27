import { ShippingMethodsComponent } from './pages/shipping-methods/shipping-methods.component';
import { ShippingAddressComponent } from './pages/shipping-address/shipping-address.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CancelPaymentComponent } from './pages/cancel-payment/cancel-payment.component';
import { BillingAddressComponent } from './pages/billing-address/billing-address.component';
import { EmptyCartGuard } from './../../core/guards/empty-cart.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
        path: '', canActivate: [EmptyCartGuard], children: [
          { path: 'billing-address', component: BillingAddressComponent },
          { path: 'cancel-payment', component: CancelPaymentComponent },
          { path: 'customer', component: CustomerComponent },
          { path: 'payment', component: PaymentComponent },
          { path: 'place-order', component: PlaceOrderComponent },
          { path: 'shipping-address', component: ShippingAddressComponent },
          { path: 'shipping-methods', component: ShippingMethodsComponent }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
