import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debug } from 'util';

@Injectable()
export class WithCredentialsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('accounts/user-info') || request.url.includes('/accounts/login')) {
      request = request.clone({
        withCredentials: true
      });

      return next.handle(request);
    }

    const headers = {};

    const token = localStorage.getItem('auth-token');
    if (token != null) {
      headers['Authorization'] = 'Bearer ' + token;
    }

    if (request.url.includes('/files')) {
      return next.handle(request.clone({ setHeaders: headers }));
    }

    if (!request.headers.has('Content-Type')) {
      headers['Content-Type'] = 'application/json';
    }

    return next.handle(request.clone({ setHeaders: headers, withCredentials: true }));
  }
}
