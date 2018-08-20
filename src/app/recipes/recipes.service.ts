import {Observable, Subject} from 'rxjs';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class RecipesService {
  url = 'https://todo-ea259.firebaseio.com/recipes.json';
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}
  getRecipes() {
    this.http.get(`${this.url}/`, {
      observe: 'events'
    }).subscribe((event: HttpEvent<any>) => {
      console.log(event);
    });
  }
  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post(this.url, recipe);
  }
  updateRecipe(id: string, recipe: Recipe): Observable<any> {
    return this.http.put(`${this.url}/${id}`, recipe)
      .pipe(
        map((response: Response) => response.json())
      );
  }
  getRecipeById(id: string): Recipe {
    return this.recipes[id];
  }

}
