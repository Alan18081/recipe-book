import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {IAppState} from '../store';
import {Store} from '@ngrx/store';
import {IAuthState} from './store/auth.reducer';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<IAppState>
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('Hello');
    return this.store.select('auth')
      .pipe(take(1))
      .pipe(map((authState: IAuthState) => authState.isAuth));
  }
}
