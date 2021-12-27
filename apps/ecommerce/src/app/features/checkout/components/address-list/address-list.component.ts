import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { iif } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { CustomerAddressService } from './../../../../data/services/customer-address.service';
import { SessionService } from './../../../../core/services/session.service';
import { CustomerAddress } from './../../../../data/models/customer-address';



@Component({
  selector: 'roinsight-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
addresses: CustomerAddress[] = [];

  @Output() setAddressEvent = new EventEmitter<string>();

  constructor(
    private session: SessionService,
    private customerAddresses: CustomerAddressService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.session.loggedInStatus$
      .pipe(
        mergeMap(
          status => iif(() => status, this.customerAddresses.getCustomerAddresses())
        ))
      .subscribe(
        addresses => {
          if (addresses.length) {
            this.addresses = addresses
          }
        },
        err => this.snackBar.open('There was a problem getting your existing addresses.', 'Close', { duration: 8000 })
      );
  }

  setAddress(change: MatRadioChange) {
    this.setAddressEvent.emit(change.value);
  }
}
