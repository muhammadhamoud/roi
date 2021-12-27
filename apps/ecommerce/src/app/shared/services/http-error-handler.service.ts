import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() { }

  handleError(err: HttpErrorResponse): Observable<never> {
    let displayMessage = '';

    if (err.error instanceof ErrorEvent) {
      displayMessage = `Client-side error: ${err.error.message}`;
    } else {
      displayMessage = `Server-side error: ${err.message}`;
    }

    return throwError(displayMessage);
  }
}
