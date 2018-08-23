import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import 'rxjs/operators/mergeMap';
import 'rxjs/operators/map';
import {map, switchMap, mergeMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignUp = this.actions$
    .pipe(ofType(AuthActions.SIGN_UP))
    .pipe(map((action: AuthActions.Login) => {
      return action.payload;
    }))
    .pipe(switchMap((authData: {email: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password));
    }))
    .pipe(switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }))
    .pipe(mergeMap((token: string) => {
      this.router.navigate(['recipes']);
      return [
        {
          type: AuthActions.LOGIN_SUCCESS
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    }));

  @Effect()
  authLogin = this.actions$
    .pipe(ofType(AuthActions.LOGIN))
    .pipe(map((action: AuthActions.Login) => {
      return action.payload;
    }))
    .pipe(switchMap((authData: {email: string, password: string}) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.email, authData.password))
    }))
    .pipe(switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }))
    .pipe(mergeMap((token: string) => {
      this.router.navigate(['recipes']);
      return [
        {
          type: AuthActions.LOGIN_SUCCESS
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    }));

  constructor(private actions$: Actions, private router: Router) {}
}
