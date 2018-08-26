import { Action } from '@ngrx/store';
import {IAuthResponse} from '../interfaces/auth-response.interface';

export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SET_TOKEN = 'SET_TOKEN';

export class GetCurrentUser implements Action {
  readonly type = GET_CURRENT_USER;
}

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: {email: string, password: string}) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: IAuthResponse) {}
}

export class LoginFailed implements Action {
  readonly type = LOGIN_FAILED;
  constructor(public payload) {}
}

export class SignUp implements Action {
  readonly type = SIGN_UP;
  constructor(public payload: {email: string, password: string, username: string}) {}
}


export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions =
  Login |
  SignUp |
  Logout |
  SetToken |
  LoginSuccess |
  LogoutSuccess |
  GetCurrentUser;
