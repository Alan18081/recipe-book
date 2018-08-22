import {Action} from '@ngrx/store';

export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}
export class SignIn implements Action {
  readonly type = SIGN_IN;
}

export class SignUp implements Action {
  readonly type = SIGN_UP;
}

export type AuthActions = SetToken | SignUp | SignIn;
