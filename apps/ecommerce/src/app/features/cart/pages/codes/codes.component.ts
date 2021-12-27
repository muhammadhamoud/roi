import { Component, ViewChild } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UntilDestroy } from '@ngneat/until-destroy';

import { OrderService } from './../../../../data/services/order.service';
import { CartService } from './../../../../data/services/cart.service';
import { Order, UpdateOrderParams } from './../../../../data//models/order';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'roinsight-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.scss']
})
export class CodesComponent {
couponCode = new FormControl('');
  giftCardCode = new FormControl('');

  @ViewChild(FormControlDirective) codesDirective: FormControlDirective | undefined;

  constructor(
    private cart: CartService,
    private order: OrderService,
    private snackBar: MatSnackBar
  ) { }

  private updateOrder(order: Order, params: UpdateOrderParams[], codeType: string) {
    this.order.updateOrder(order, params)
      .subscribe(
        () => {
          this.snackBar.open(`Successfully added ${codeType} code.`, 'Close', { duration: 8000 });
          this.couponCode.reset();
          this.giftCardCode.reset();
          this.codesDirective?.reset();
        },
        err => this.snackBar.open(`There was a problem adding your ${codeType} code.`, 'Close', { duration: 8000 })
      );
  }

  addCoupon() {
    this.updateOrder({ id: this.cart.orderId, couponCode: this.couponCode.value }, [UpdateOrderParams.couponCode], 'coupon');
  }

  addGiftCard() {
    this.updateOrder({ id: this.cart.orderId, giftCardCode: this.giftCardCode.value }, [UpdateOrderParams.giftCardCode], 'gift card');
  }

}
