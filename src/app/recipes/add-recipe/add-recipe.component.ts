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
    const select = event.target as HTMLSelectElement;
    const selectedId = select.value;
    if (this.selectedIngredients.find(({id}) => id === selectedId)) {
      this.selectedIngredients.filter(({id}) => id !== selectedId);
    } else {
      this.selectedIngredients.push(
        this.ingredients.find(({id}) => id === selectedId)
      );
    }
  }

  saveRecipe(): void {
    const newRecipe = new Recipe(
      this.name,
      this.description,
      this.imageUrl,
      this.selectedIngredients
    );
    console.log(this.selectedIngredients);
    this.recipesService.addRecipe(newRecipe);
  }
}
