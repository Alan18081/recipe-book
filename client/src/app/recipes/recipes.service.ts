import {Observable} from 'rxjs';
import {Recipe} from './interfaces/recipe.interface';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IRecipeInfo} from './interfaces/recipe-info.interface';

@Injectable()
export class RecipesService {

  constructor(
    private http: HttpClient
  ) {}

  fetchRecipes(): Observable<any> {
    return this.http.get('/recipes');
  }

  addRecipe(recipeInfo: IRecipeInfo): Observable<any> {
    return this.http.post('/recipes', recipeInfo);
  }

  updateRecipe(id: number, recipeInfo: IRecipeInfo): Observable<any> {
    return this.http.put(`/recipes/${id}`, recipeInfo);
  }

  removeRecipe(id: number) {
    return this.http.delete(`/recipes/${id}`);
  }
}
