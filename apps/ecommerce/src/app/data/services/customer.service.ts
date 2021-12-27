import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private url = `${environment.apiUrl}/api/customers`;
 constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  createCustomer(email: string, password: string, firstName: string, lastName: string): Observable<Customer> {
    return this.http.post<Customer>(this.url, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    })
      .pipe(catchError(this.eh.handleError));
  }

  getCurrentCustomer(): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/current`)
      .pipe(catchError(this.eh.handleError));
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }
}
