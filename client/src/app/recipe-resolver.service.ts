import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipes/interfaces/recipe.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {IAppState} from './store.interface';
import {Store} from '@ngrx/store';

@Injectable()
export class RecipeResolverService implements Resolve<Recipe> {
  constructor(private store: Store<IAppState>) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.store.select('recipes');
  }
}
