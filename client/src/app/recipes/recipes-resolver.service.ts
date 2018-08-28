import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Recipe} from './interfaces/recipe.interface';
import {Observable} from 'rxjs/Rx';
import {IAppState} from '../store.interface';
import {Store} from '@ngrx/store';
import * as RecipesActions from './store/recipes.actions';
import { IFeatureState, IRecipesState } from './store/recipes.reducer';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipesResolver implements Resolve<Recipe[]> {

  constructor(
    private store: Store<IFeatureState>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    this.store.dispatch(new RecipesActions.FetchRecipes());
    console.log('fdfd');
    return this.store.select('recipes').pipe(
      map((recipesState: IRecipesState) => {
        return recipesState.recipes;
      })
    );
  }
}
