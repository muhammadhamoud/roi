import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DeliveryLeadTime } from '../models/delivery-lead-time';
import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';
import { environment } from './../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DeliveryLeadTimeService {

  private url = `${environment.apiUrl}/api/delivery_lead_times`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  getDeliveryLeadTimes(): Observable<DeliveryLeadTime[]> {
    return this.http.get<DeliveryLeadTime[]>(this.url)
      .pipe(catchError(this.eh.handleError));
  }
}
