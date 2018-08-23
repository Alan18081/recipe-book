import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class RemoveIngredient implements Action {
  readonly type = REMOVE_INGREDIENT;
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: { name: string, amount: number }) {}
}

export class StartEditing implements Action {
  readonly type = START_EDITING;
  constructor(public payload: Ingredient) {}
}

export class StopEditing implements Action {
  readonly type = STOP_EDITING;
}

export type ShoppingListActions =
  AddIngredient |
  UpdateIngredient |
  RemoveIngredient |
  StartEditing |
  StopEditing;
