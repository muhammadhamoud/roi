import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';
import { environment } from './../../../environments/environment.prod';
import { Shipment } from '../models/shipment';


@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private url = `${environment.apiUrl}/api/shipments`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  getShipment(id: string): Observable<Shipment> {
    return this.http.get<Shipment>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  updateShipment(id: string, shippingMethodId: string): Observable<Shipment> {
    return this.http.patch<Shipment>(
      `${this.url}/${id}`,
      { shippingMethodId: shippingMethodId }
    )
      .pipe(catchError(this.eh.handleError));
  }
}
