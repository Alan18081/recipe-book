import {Action} from '@ngrx/store';
import { Recipe } from '../interfaces/recipe.interface';
import {IRecipeInfo} from '../interfaces/recipe-info.interface';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED';
export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const REMOVE_RECIPE_SUCCESS = 'REMOVE_RECIPE_SUCCESS';
export const SELECT_RECIPE = 'SELECT_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const SET_FILTER_STRING = 'SET_FILTER_STRING';

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export class FetchRecipesSuccess implements Action {
  readonly type = FETCH_RECIPES_SUCCESS;
  constructor(public payload: Recipe[]) {}
}

export class FetchRecipesFailed implements Action {
  readonly type = FETCH_RECIPES_FAILED;
  constructor(public payload: Error) {}
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: IRecipeInfo) {}
}

export class AddRecipeSuccess implements Action {
  readonly type = ADD_RECIPE_SUCCESS;
  constructor(public payload: Recipe) {}
}

export class RemoveRecipe implements Action {
  readonly type = REMOVE_RECIPE;
  constructor(public payload: number) {}
}

export class RemoveRecipeSuccess implements Action {
  readonly type = REMOVE_RECIPE_SUCCESS;
  constructor(public payload: number) {}
}

export class SelectRecipe implements Action {
  readonly type = SELECT_RECIPE;
  constructor(public payload: Recipe) {}
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: {
    id: number,
    info: IRecipeInfo
  }) {}
}

export class UpdateRecipeSuccess implements Action {
  readonly type = UPDATE_RECIPE_SUCCESS;
  constructor(public payload: Recipe) {}
}

export class SetFilterString implements Action {
  readonly type = SET_FILTER_STRING;
  constructor(public payload: string) {}
}

export type RecipesActions =
  FetchRecipes |
  FetchRecipesSuccess |
  FetchRecipesFailed |
  UpdateRecipe |
  AddRecipe |
  AddRecipeSuccess |
  RemoveRecipe |
  RemoveRecipeSuccess |
  SelectRecipe |
  UpdateRecipeSuccess |
  SetFilterString;
