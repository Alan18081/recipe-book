import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'New recipe',
      'Some great and taste recipe',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CAhttps://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
      [
        new Ingredient('Apple', 3),
        new Ingredient('Potato', 2)
      ]
    )
  ];
  constructor() {}
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  getRecipeById(selectedId: string): Recipe | undefined {
    return this.recipes.find(({id}) => id === selectedId);
  }
  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.emit(this.getRecipes());
  }
  updateRecipe(updateId: string, recipe: Recipe): void {
    this.recipes[this.recipes.findIndex(({id}) => id === updateId)] = recipe;
    this.recipesChanged.emit(this.getRecipes());
  }
}
