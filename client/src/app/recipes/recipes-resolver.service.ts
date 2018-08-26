import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Recipe} from './interfaces/recipe.interface';
import {Observable} from 'rxjs/Rx';
import {IAppState} from '../store.interface';
import {Store} from '@ngrx/store';
import * as RecipesActions from './store/recipes.actions';

@Injectable()
export class RecipesResolver implements Resolve<Recipe[]> {

  constructor(
    private store: Store<IAppState>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    this.store.dispatch(new RecipesActions.FetchRecipes());
    return this.store.select('recipes');
  }
}
