import { Recipe } from '../interfaces/recipe.interface';
import * as actions from './recipes.actions';
import * as R from 'ramda';

export interface IFeatureState {
  recipes: IRecipesState;
}

export interface IRecipesState {
  recipes: Recipe[];
  activeRecipe: Recipe;
  filter: string;
}

const initialState: IRecipesState = {
  recipes: [],
  activeRecipe: null,
  filter: ''
};

export function recipesReducer(state = initialState, {type, payload}: actions.RecipesActions) {
  switch (type) {
    case actions.ADD_RECIPE_SUCCESS:
      return R.merge(
        state,
        {
          recipes: R.concat(state.recipes, payload)
        }
      );

    case actions.REMOVE_RECIPE_SUCCESS:
      return R.merge(
        state,
        {
          recipes: R.filter(({id}) => id === payload)
        }
      );

    case actions.SET_FILTER_STRING:
      return R.merge(
        state,
        {
          filter: payload
        }
      );

    case actions.UPDATE_RECIPE_SUCCESS:
      return R.merge(
        state,
        {
          recipes: R.update(
            state.recipes.findIndex(({id}) => id === (<Recipe>payload).id),
            payload,
            state.recipes
          )
        }
      );

    default:
      return state;
  }
}
