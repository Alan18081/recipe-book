import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../../shopping-list/shopping.service';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  ingredients: Ingredient[];
  name: string;
  description: string;
  imageUrl: string;
  selectedIngredients: Ingredient[] = [];
  activeId: string;
  isSaved: false;
  warningMessage: string;
  constructor(
    private shoppingService: ShoppingService,
    private recipesService: RecipesService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeId = this.router.snapshot.params.id;
    this.setActiveRecipeData(this.activeId);
    this.router.params.subscribe((params: Params): void => {
      this.activeId = params.id;
      this.setActiveRecipeData(this.activeId);
    });
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  setActiveRecipeData(id: string): void {
    const {name, description, ingredients} = this.recipesService.getRecipeById(id);
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
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

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isSaved) {
      return true;
    } else {
      this.warningMessage = '';
      return false;
    }
  }

  saveRecipe(): void {
    const updatedRecipe = new Recipe(this.name, this.description, this.imageUrl, this.selectedIngredients);
    this.recipesService.updateRecipe(this.activeId, updatedRecipe);
  }
}
