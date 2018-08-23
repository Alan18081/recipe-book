import * as actions from './auth.actions';
import {Map} from 'immutable';

export interface IAuthState {
  token: string;
  isAuth: boolean;
}

const initialState: IAuthState = {
  token: '',
  isAuth: false
};

const immutableInitialState = Map(initialState);

export function authReducer(state = immutableInitialState, action: actions.AuthActions) {
  switch (action.type) {
    case actions.LOGOUT:
    default:
      return state;
  }
}