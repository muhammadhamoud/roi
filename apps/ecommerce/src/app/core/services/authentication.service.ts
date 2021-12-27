
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 private url= `${environment.apiUrl}/oauth`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  getClientSession(): Observable<object> {
    return this.http.post<object>(
      `${this.url}/token`,
      { grantType: 'clientcredentials' },
      { headers: { 'Content-Type': 'application/json' } })
      .pipe(catchError(this.eh.handleError));
  }

  login(email: string, password: string): Observable<object> {
    return this.http.post<object>(
      `${this.url}/token`,
      { username: email, password: password, grantType: 'password' },
      { headers: { 'Content-Type': 'application/json' } })
      .pipe(catchError(this.eh.handleError));
  }
}
