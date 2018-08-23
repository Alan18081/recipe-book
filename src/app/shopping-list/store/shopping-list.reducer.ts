import * as actions from './shopping-list.actions';
import {Ingredient} from '../../shared/ingredient.model';
import * as R from 'ramda';

export interface IShoppingListState {
  ingredients: Ingredient[];
  activeIngredient: Ingredient;
  isEditing: boolean;
}

const initialState: IShoppingListState = {
  ingredients: [
    new Ingredient('Apple', 20),
    new Ingredient('Soup', 2),
  ],
  activeIngredient: null,
  isEditing: false
};

export function shoppingListReducer(state = initialState, action: actions.ShoppingListActions) {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return R.merge(
        state,
        {
          ingredients: R.merge(state.ingredients, {
            [action.payload.id]: action.payload
          })
        }
      );
    case  actions.REMOVE_INGREDIENT:
      return R.merge(
        state,
        {
          ingredients: R.omit(state.activeIngredient.id, state.ingredients),
          activeIngredient: null,
          isEditing: false
        }
      );
    case actions.START_EDITING:
      return R.merge(
        state,
        {
          activeIngredient: action.payload,
          isEditing: true
        }
      );
    default:
      return state;
  }
}
