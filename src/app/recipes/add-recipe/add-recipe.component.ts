import { Component, OnInit, ViewChild } from '@angular/core';
import {ShoppingService} from '../../shopping-list/shopping.service';
import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  ingredients: Ingredient[];
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

  saveRecipe(form: NgForm): void {
    // const newRecipe = new Recipe(
    //   this.name,
    //   this.description,
    //   this.imageUrl,
    //   this.selectedIngredients
    // );
    // console.log(this.selectedIngredients);
    // this.recipesService.addRecipe(newRecipe);
    console.log(form.value);
  }

  clearForm(): void {
    this.form.form.reset();
  }
}
