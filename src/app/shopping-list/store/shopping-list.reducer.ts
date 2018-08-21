import * as ShoppingListActions from './shopping-list.actions';
import {Ingredient} from '../../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient('Apple', 20),
    new Ingredient('Soup', 2),
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    default:
      return state;
  }
}
