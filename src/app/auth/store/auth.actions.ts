import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: {email: string, password: string}) {}
}

export class SignUp implements Action {
  readonly type = SIGN_UP;
  constructor(public payload: {email: string, password: string}) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions = Login | SignUp | Logout | SetToken;
