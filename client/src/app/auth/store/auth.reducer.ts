import * as R from 'ramda';
import * as actions from './auth.actions';

export interface IAuthState {
  token: string;
  isAuth: boolean;
  user: object
}

const initialState: IAuthState = {
  token: '',
  isAuth: false,
  user: null
};

export function authReducer(state = initialState, action: actions.AuthActions) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return R.merge(
        state,
        {
          token: action.payload.token,
          isAuth: true,
          user: action.payload.user
        }
      );
    case actions.LOGOUT_SUCCESS:
      return R.merge(
        state,
        {
          token: '',
          isAuth: false,
          user: null
        }
      );
    default:
      return state;
  }
}
