import {Component, OnInit} from '@angular/core';
import {Recipe} from '../interfaces/recipe.interface';
import {Observable} from 'rxjs/Rx';
import {IFeatureState, IRecipesState} from '../store/recipes.reducer';
import {Store} from '@ngrx/store';
import * as recipesActions from '../store/recipes.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Observable<Recipe[]>;
  filterString = '';
  constructor(private store: Store<IFeatureState>) { }

  ngOnInit() {
    this.store.dispatch(new recipesActions.FetchRecipes());
    this.recipes = this.store
      .select('recipes')
      .pipe(
        map((recipesState: IRecipesState) => {
          return recipesState.recipes;
        })
      )
  }

  selectRecipe(recipe: Recipe) {
    this.store.dispatch(new recipesActions.SelectRecipe(recipe));
  }
}
