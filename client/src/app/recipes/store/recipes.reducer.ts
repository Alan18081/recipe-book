import { Recipe } from '../recipe.model';
import * as actions from './recipes.actions';
import * as R from 'ramda';

export interface IFeatureState {
  recipes: IRecipesState;
}

export interface IRecipesState {
  recipes: Recipe[];
  activeRecipe: Recipe;
}

const initialState: IRecipesState = {
  recipes: [],
  activeRecipe: null
};

export function recipesReducer(state = initialState, action: actions.RecipesActions) {
  switch (action.type) {
    case actions.ADD_RECIPE_SUCCESS:
      return R.merge(
        state,
        {
          recipes: R.concat(state.recipes, action.payload)
        }
      );
    case actions.REMOVE_RECIPE_SUCCESS:
      return R.merge(
        state,
        {
          recipes: R.filter(({id}) => id === action.payload)
        }
      );
    default:
      return state;
  }
}