
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { HttpErrorHandlerService } from '../../shared/services/http-error-handler.service';
import { Address } from '../models/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private url = `${environment.apiUrl}/api/addresses`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  createAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.url, address)
      .pipe(catchError(this.eh.handleError));
  }

  getAddress(id: string): Observable<Address> {
    return this.http.get<Address>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

}


