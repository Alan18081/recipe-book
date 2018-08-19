import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../../shopping-list/shopping.service';
import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  activeRecipe: Recipe;
  isEditing = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService,
    private recipesService: RecipesService
  ) { }
  ngOnInit() {
    const {id} = this.route.snapshot.params;
    this.isEditing = !!id;
    if (this.isEditing) {
      this.activeRecipe = this.recipesService.getRecipeById(id);
    }
    this.setForm();
    this.route.params.subscribe((params: Params) => {
      this.isEditing = params.id;
      this.activeRecipe = this.recipesService.getRecipeById(params.id);
      if (this.isEditing) {
        this.setForm();
      }
    });
  }

  setForm() {
    let name = '';
    let description = '';
    let imageUrl = '';
    let ingredients = [];
    if(this.isEditing) {
      name = this.activeRecipe.name;
      description = this.activeRecipe.description;
      imageUrl = this.activeRecipe.imageUrl;
      if (this.activeRecipe.ingredients.length) {
        for (const ingredient of this.activeRecipe.ingredients) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^\d+$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imageUrl': new FormControl(imageUrl, Validators.required),
      'ingredients': new FormArray(ingredients, Validators.minLength(1))
    });
  }

  submitHandler(): void {
    const {title, description, imageUrl, ingredients} = this.recipeForm.value;
    const ingredientsArr = [];
    for (let item of ingredients) {
      ingredientsArr.push(new Ingredient(item.name, item.amount));
    }
    const newRecipe = new Recipe(
      title,
      description,
      imageUrl,
      ingredients
    );
    this.recipesService.addRecipe(newRecipe);
  }


  addIngredient(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(
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
