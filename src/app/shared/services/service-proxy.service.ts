import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as _ from 'lodash';
import { catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceProxyService {
  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: {},
    params: {},
  };

  callApi(url: string, body: any, method?: string) {
    const httpOptions = _.cloneDeep(this.httpOptions);

    if (method) {
      switch (method) {
        case 'post':
          return this.http.post(url, body, this.httpOptions).pipe(
            catchError((e, c) => this.handleError(e)),
            map((v: any) => v)
          );

        case 'get':
          httpOptions.params = body;

          return this.http.get(url, httpOptions).pipe(
            catchError((e, c) => this.handleError(e)),
            map((v: any) => v)
          );

        case 'put':
          return this.http.put(url, body, this.httpOptions).pipe(
            catchError((e, c) => this.handleError(e)),
            map((v: any) => v)
          );

        case 'delete':
          httpOptions.params = body;

          return this.http.delete(url, httpOptions).pipe(
            catchError((e, c) => this.handleError(e)),
            map((v: any) => v)
          );

        case 'patch':
          httpOptions.params = body;

          return this.http.patch(url, httpOptions).pipe(
            catchError((e, c) => this.handleError(e)),
            map((v: any) => v)
          );

        case 'head':
          httpOptions.params = body;

          return this.http.head(url, this.httpOptions).pipe(
            catchError((e, c) => this.handleError(e)),
            map((v: any) => v)
          );

        default:
          return this.http.post(url, body, this.httpOptions).pipe(
            catchError((e, c) => this.handleError(e)),
            map((v: any) => v)
          );
      }
    } else {
      return this.http.post(url, body, this.httpOptions).pipe(
        catchError((e, c) => this.handleError(e)),
        map((v: any) => v)
      );
    }
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}
