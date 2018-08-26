import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../../shopping-list/shopping.service';
import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../interfaces/recipe.interface';
import {RecipesService} from '../recipes.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {IFeatureState} from '../store/recipes.reducer';
import * as RecipesActions from '../store/recipes.actions';

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
    private store: Store<IFeatureState>
  ) { }
  ngOnInit() {
    const {id} = this.route.snapshot.params;
    this.isEditing = !!id;

    if(this.isEditing) {
      this.store.select('recipes')
        .subscribe(({activeRecipe}) => {
          this.activeRecipe = activeRecipe;
          this.setForm();
        });
    }
    else {
      this.setForm();
    }
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
    if(this.isEditing) {
      this.store.dispatch(new RecipesActions.UpdateRecipeSuccess(this.recipeForm.value));
    }
    else {
      this.store.dispatch(new RecipesActions.AddRecipeSuccess(this.recipeForm.value));
    }
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

  get ingredientsControl() {
    return <FormArray>this.recipeForm.get('ingredients');
  }

}
