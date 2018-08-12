import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe = [
    new Recipe(
      'New recipe',
      'Some great and taste recipe',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CAhttps://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
