import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {IAppState} from '../store';
import {Store} from '@ngrx/store';
import {IAuthState} from './store/auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<IAppState>
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.store.select('auth').map((authState: IAuthState) => authState.isAuth);
  }
}
