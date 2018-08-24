import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../store';
import {IAuthState} from '../auth/store/auth.reducer';
import 'rxjs/add/operator/switchMap';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth')
      .pipe(take(1))
      .pipe(switchMap((authState: IAuthState) => {
        const updatedReq = req.clone({
          params: req.params.set('auth', authState.token)
        });
        return next.handle(updatedReq);
      }));
  }
}
