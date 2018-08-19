import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';

@Injectable()
export class RecipeResolverService implements Resolve<Recipe> {
  constructor(private recipesService: RecipesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipesService.getRecipeById(route.params.id);
  }
}
