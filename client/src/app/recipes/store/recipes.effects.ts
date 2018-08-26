import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as actions from './recipes.actions';
import {switchMap, map} from 'rxjs/operators';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../interfaces/recipe.interface';
import {IRecipeInfo} from '../interfaces/recipe-info.interface';

@Injectable()
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipesService: RecipesService
  ) {}

  @Effect()
  fetchRecipes = this.actions$
    .pipe(ofType(actions.FETCH_RECIPES))
    .pipe(switchMap(() => {
      return this.recipesService.fetchRecipes();
    }))
    .pipe(map((recipes: Recipe[]) => {
      return new actions.FetchRecipesSuccess(recipes);
    }));

  @Effect()
  addRecipe = this.actions$
    .pipe(ofType(actions.ADD_RECIPE))
    .pipe(map((action: actions.AddRecipe) => {
      return action.payload;
    }))
    .pipe(switchMap((recipeInfo: IRecipeInfo) => {
      return this.recipesService.addRecipe(recipeInfo);
    }))
    .pipe(map((recipe: Recipe) => {
      return new actions.AddRecipeSuccess(recipe);
    }));

  @Effect()
  updateRecipe = this.actions$
    .pipe(ofType(actions.UPDATE_RECIPE))
    .pipe(map((action: actions.UpdateRecipe) => {
      return action.payload;
    }))
    .pipe(switchMap(({ id, info }) => {
      return this.recipesService.updateRecipe(id, info);
    }))
    .pipe(map((recipe: Recipe) => {
      return new actions.UpdateRecipeSuccess(recipe);
    }));

  @Effect()
  removeRecipe = this.actions$
    .pipe(ofType(actions.REMOVE_RECIPE))
    .pipe(map((action: actions.RemoveRecipe) => {
      return action.payload
    }))
    .pipe(switchMap((id: number) => {
      return this.recipesService.removeRecipe(id)
        .pipe(map((response) => {
          return id;
        }));
    }))
    .pipe(map((id: number) => {
      return new actions.RemoveRecipeSuccess(id);
    }))
}
