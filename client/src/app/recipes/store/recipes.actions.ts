import {Action} from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const REMOVE_RECIPE_SUCCESS = 'REMOVE_RECIPE_SUCCESS';
export const SELECT_RECIPE = 'SELECT_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}

export class AddRecipeSuccess implements Action {
  readonly type = ADD_RECIPE_SUCCESS;
  constructor(public payload: Recipe) {}
}

export class RemoveRecipe implements Action {
  readonly type = REMOVE_RECIPE;
  constructor(public payload: string) {}
}

export class RemoveRecipeSuccess implements Action {
  readonly type = REMOVE_RECIPE_SUCCESS;
  constructor(public payload: string) {}
}

export class SelectRecipe implements Action {
  readonly type = SELECT_RECIPE;
  constructor(public payload: Recipe) {}
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: Recipe) {}
}

export class UpdateRecipeSuccess implements Action {
  readonly type = UPDATE_RECIPE_SUCCESS;
  constructor(public payload: Recipe) {}
}

export type RecipesActions =
  AddRecipe |
  AddRecipeSuccess |
  RemoveRecipe |
  RemoveRecipeSuccess |
  SelectRecipe |
  UpdateRecipe |
  UpdateRecipeSuccess;
