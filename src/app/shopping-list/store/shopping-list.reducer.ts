import * as actions from './shopping-list.actions';
import {Ingredient} from '../../shared/ingredient.model';
import {Map} from 'immutable';

export interface IShoppingListState {
  ingredients: Ingredient[];
  activeIngredient: Ingredient;
  isEditing: boolean;
}


export function shoppingListReducer(state = initialState, action: actions.ShoppingListActions) {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case actions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.concat(action.payload)
      };
    case actions.UPDATE_INGREDIENT:
      const updatedIngredients = [...state.ingredients];
      const index = updatedIngredients.findIndex(({id}) => id === state.activeIngredient.id);
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        ...action.payload
      };
      return {
        ...state,
        ingredients: updatedIngredients,
        activeIngredient: {
          ...state.activeIngredient,
          ...action.payload
        }
      };
    case actions.START_EDITING:
      return {
        ...state,
        activeIngredient: action.payload,
        isEditing: true
      };
    case actions.STOP_EDITING:
      return {
        ...state,
        activeIngredient: null,
        isEditing: false
      };
    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(({id}) => id !== state.activeIngredient.id),
        activeIngredient: null,
        isEditing: false
      };
    default:
      return state;
  }
}
