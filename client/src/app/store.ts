import {ActionReducerMap} from '@ngrx/store';
import {authReducer, IAuthState} from './auth/store/auth.reducer';
import {IShoppingListState} from './shopping-list/store/shopping-list.reducer';


export interface IAppState {
  auth: IAuthState;
  shoppingList: IShoppingListState;
}

export const reducers: ActionReducerMap<IAppState> = {
  auth: authReducer
};
