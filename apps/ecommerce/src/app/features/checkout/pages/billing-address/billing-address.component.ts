import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { iif } from 'rxjs';
import { combineLatest, concat, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { CustomerAddressService } from './../../../../data/services/customer-address.service';
import { CartService } from './../../../../data/services/cart.service';
import { OrderService } from './../../../../data/services/order.service';
import { SessionService } from './../../../../core/services/session.service';
import { AddressService } from './../../../../data/services/address.service';
import { Address } from './../../../../data/models/address';
import { Order, UpdateOrderParams } from './../../../../data/models/order';



@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'roinsight-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {
  showAddresses = false;
  sameShippingAddressAsBilling = false;
  selectedCustomerAddressId = '';

  constructor(
    private addresses: AddressService,
    private snackBar: MatSnackBar,
    private session: SessionService,
    private orders: OrderService,
    private cart: CartService,
    private router: Router,
    private customerAddresses: CustomerAddressService) { }

  ngOnInit() {
    this.session.loggedInStatus$
      .subscribe(
        status => this.showAddresses = status
      );
  }

  updateBillingAddress(address: Address) {
    if (this.showAddresses && this.selectedCustomerAddressId) {
      this.cloneAddress();
    } else if (address.firstName && address.lastName && address.line1 && address.city && address.zipCode && address.stateCode && address.countryCode && address.phone) {
      this.createAddress(address);
    }
    else {
      this.snackBar.open('Check your address. Some fields are missing.', 'Close');
    }
  }

  setCustomerAddress(customerAddressId: string) {
    this.selectedCustomerAddressId = customerAddressId;
  }

  setSameShippingAddressAsBilling(change: boolean) {
    this.sameShippingAddressAsBilling = change;
  }

  private createAddress(address: Address) {
    this.addresses.createAddress(address)
      .pipe(
        concatMap(
          address => {
            const update = this.updateOrderObservable({
              id: this.cart.orderId,
              billingAddressId: address.id
            }, [UpdateOrderParams.billingAddress]);

            if (this.showAddresses) {
              return combineLatest([update, this.customerAddresses.createCustomerAddress(address.id || '', '')]);
            } else {
              return update;
            }
          }))
      .subscribe(
        () => this.showSuccessSnackBar(),
        err => this.showErrorSnackBar()
      );
  }

  private cloneAddress() {
    this.updateOrderObservable({
      id: this.cart.orderId,
      billingAddressCloneId: this.selectedCustomerAddressId
    }, [UpdateOrderParams.billingAddressClone])
      .subscribe(
        () => this.showSuccessSnackBar(),
        err => this.showErrorSnackBar()
      );
  }

  private updateOrderObservable(order: Order, updateParams: UpdateOrderParams[]): Observable<any> {
    return iif(() => this.sameShippingAddressAsBilling,
      concat([
        this.orders.updateOrder(order, updateParams),
        this.orders.updateOrder(order, [UpdateOrderParams.shippingAddressSameAsBilling])
      ]),
      this.orders.updateOrder(order, updateParams)
    );
  }

  private showErrorSnackBar() {
    this.snackBar.open('There was a problem creating your address.', 'Close', { duration: 8000 });
  }

  private navigateTo(path: string) {
    setTimeout(() => this.router.navigateByUrl(path), 4000);
  }

  private showSuccessSnackBar() {
    this.snackBar.open('Billing address successfully added. Redirecting...', 'Close', { duration: 3000 });
    if (this.sameShippingAddressAsBilling) {
      this.navigateTo('/shipping-methods');
    } else {
      this.navigateTo('/shipping-address');
    }
  }
}
