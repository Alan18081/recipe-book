import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {map, switchMap, mergeMap, catchError} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
import {ILoginInfo} from '../interfaces/login-info.interface';
import {ISignUpInfo} from '../interfaces/signup-info.interface';
import {IAuthResponse} from '../interfaces/auth-response.interface';
import {AuthService} from '../auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}

  @Effect()
  authGetCurrentUser = this.actions$
    .pipe(ofType(AuthActions.GET_CURRENT_USER))
    .pipe(
      switchMap((action: AuthActions.GetCurrentUser) => {
        return this.authService.getUser()
          .pipe(
            map((body: IAuthResponse) => {
              return new AuthActions.LoginSuccess(body);
            }),
            catchError((error) => {
              return of(new AuthActions.LoginFailed(error));
            })
          )
      })
    );

  @Effect()
  authSignUp = this.actions$
    .pipe(ofType(AuthActions.SIGN_UP))
    .pipe(map((action: AuthActions.SignUp) => {
      return action.payload;
    }))
    .pipe(switchMap((authData: ISignUpInfo) => {
      return this.authService.signUp(authData);
    }))
    .pipe(mergeMap((body: IAuthResponse) => {
      this.router.navigate(['recipes']);
      this.authService.setTokenInfo(body.token, body.expiresIn);
      return [{
          type: AuthActions.LOGIN_SUCCESS,
          payload: body
        }];
    }));

  @Effect()
  authLogin = this.actions$
    .pipe(
      ofType(AuthActions.LOGIN),
      map((action: AuthActions.Login) => {
        return action.payload;
      }),
      switchMap((authData: ILoginInfo) => {
        return this.authService.login(authData)
          .pipe(
            catchError((error: Error) => {
              return of(new AuthActions.LoginFailed(error));
            })
          );
      }),
      map((body: IAuthResponse) => {
        this.authService.setTokenInfo(body.token, body.expiresIn);
        this.router.navigate(['recipes']);
        return new AuthActions.LoginSuccess(body);
      }),

    );

  @Effect()
  authLogout = this.actions$
    .pipe(ofType(AuthActions.LOGOUT))
    .pipe(map(() => {
      this.authService.removeTokenInfo();
      return new AuthActions.LogoutSuccess();
    }))
}
