import { IShoppingListState } from './shopping-list/store/shopping-list.reducer';

export interface IAppState {
  shoppingList: IShoppingListState;
}
