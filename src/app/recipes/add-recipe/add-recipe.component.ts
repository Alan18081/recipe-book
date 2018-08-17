import { Component, OnInit, ViewChild } from '@angular/core';
import {ShoppingService} from '../../shopping-list/shopping.service';
import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  form = new FormGroup({
    'title': new FormControl(null, Validators.required),
    'description': new FormControl(null, Validators.required),
    'imageUrl': new FormControl(null, Validators.required),
    'ingredients': new FormArray([], Validators.minLength(1)),
    'author': new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)])
    })
  });
  constructor(
    private shoppingService: ShoppingService,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {

  }

  submitHandler(): void {
    const {title, description, imageUrl, ingredients} = this.form.value;
    const newRecipe = new Recipe(
      title,
      description,
      imageUrl,
      ingredients
    );
    this.recipesService.addRecipe(newRecipe);
  }
  

  addIngredient(): void {
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^\d$/), this.ingredientAmountValidator])
      })
    );
  }

  ingredientAmountValidator(control: FormControl): {[s: string]: boolean} {
    if (Number(control.value) < 1) {
      return {
        'tooSmallAmount': true
      };
    }
  }
}
