import * as R from 'ramda';
import * as actions from './auth.actions';

export interface IAuthState {
  token: string;
  isAuth: boolean;
}

const initialState: IAuthState = {
  token: '',
  isAuth: false
};

export function authReducer(state = initialState, action: actions.AuthActions) {
  switch (action.type) {
    case actions.SET_TOKEN:
      return R.merge(state, { token: action.payload });
    case actions.SIGN_UP:
    case actions.SIGN_IN:
      return R.merge(state, { isAuth: true });
    default:
      return state;
  }
}
