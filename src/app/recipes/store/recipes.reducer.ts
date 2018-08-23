import { Recipe } from '../recipe.model';

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

export function recipesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}