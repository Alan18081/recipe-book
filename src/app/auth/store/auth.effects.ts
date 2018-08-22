import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {mergeMap} from 'rxjs-compat/operator/mergeMap';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignUp = this.actions$.pipe(ofType('SIGN_UP'), mergeMap);

  constructor(private actions$: Actions) {}
}
