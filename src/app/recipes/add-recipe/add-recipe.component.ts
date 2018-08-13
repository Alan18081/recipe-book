import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../../shopping-list/shopping.service';
import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  ingredients: Ingredient[];
  name: string;
  description: string;
  imageUrl: string;
  selectedIngredients: Ingredient[] = [];
  constructor(
    private shoppingService: ShoppingService,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  setIngredient(event: Event): void {
    for (let item of event.target.selectedOptions) {
      const foundIngredient = this.ingredients.find(({name}) => item.value);
      this.selectedIngredients.push(foundIngredient);
    }
  }

  saveRecipe(): void {
    const newRecipe = new Recipe(
      this.name,
      this.description,
      this.imageUrl,
      this.selectedIngredients
    );
    this.recipesService.addRecipe(newRecipe);
  }
}
