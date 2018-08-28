import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const updatedReq = req.clone({
      headers: req.headers.append(
        'Authorization',
        `Bearer ${this.authService.getTokenInfo().token}`
      )
    });
    return next.handle(updatedReq);
  }
}
