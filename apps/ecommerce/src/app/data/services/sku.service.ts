import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment.prod';
import { HttpErrorHandlerService } from './../../shared/services/http-error-handler.service';

import { Sku } from '../data/models/sku';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

 private url = `${environment.apiUrl}/api/skus`;

  constructor(private http: HttpClient, private eh: HttpErrorHandlerService) { }

  getSku(id: string): Observable<Sku> {
    return this.http.get<Sku>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  getSkus(page: number, pageSize: number): Observable<Sku[]> {
    return this.http.get<Sku[]>(
      this.url,
      {
        params: {
          'page': page.toString(),
          'pageSize': pageSize.toString()
        }
      })
      .pipe(catchError(this.eh.handleError));
  }
}
