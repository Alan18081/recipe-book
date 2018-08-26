import {Component} from '@angular/core';
import {Recipe} from '../interfaces/recipe.interface';
import {Observable} from 'rxjs/Rx';
import {IFeatureState, IRecipesState} from '../store/recipes.reducer';
import {Store} from '@ngrx/store';
import {SelectRecipe} from '../store/recipes.actions';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipesState: Observable<IRecipesState>;
  filterString = '';
  constructor(private store: Store<IFeatureState>) { }

  selectRecipe(recipe: Recipe) {
    this.store.dispatch(new SelectRecipe(recipe));
  }
}
