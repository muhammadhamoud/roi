import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment.prod';
import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';

import { Order, GetOrderParams, UpdateOrderParams } from '../models/order';
import { Shipment } from '../models/shipment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private url = `${environment.apiUrl}/api/orders`;

  constructor(
    private http: HttpClient,
    private eh: HttpErrorHandlerService) { }

  createOrder(): Observable<Order> {
    return this.http.post<Order>(this.url, {})
      .pipe(catchError(this.eh.handleError));
  }

  getOrder(id: string, orderParam: GetOrderParams): Observable<Order> {
    let params = {};
    if (orderParam != GetOrderParams.none) {
      params = { [orderParam]: 'true' };
    }

    return this.http.get<Order>(`${this.url}/${id}`, { params: params })
      .pipe(catchError(this.eh.handleError));
  }

  updateOrder(order: Order, params: UpdateOrderParams[]): Observable<Order> {
    const updateParams = [];
    for (const param of params) {
      updateParams.push(param.toString());
    }

    return this.http.patch<Order>(
      `${this.url}/${order.id}`,
      order,
      { params: { 'field': updateParams } }
    )
      .pipe(catchError(this.eh.handleError));
  }

  getOrderShipments(id: string): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(`${this.url}/${id}/shipments`)
      .pipe(catchError(this.eh.handleError));
  }
}
