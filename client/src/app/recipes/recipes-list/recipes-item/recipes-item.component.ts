import { Component, Input} from '@angular/core';
import {Recipe} from '../../interfaces/recipe.interface';
import {IFeatureState} from '../../store/recipes.reducer';
import {Store} from '@ngrx/store';
import * as RecipesActions from '../../store/recipes.actions';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;
  constructor(private store: Store<IFeatureState>) { }

  selectEvent() {
    this.store.dispatch(new RecipesActions.SelectRecipe(this.recipe));
  }
}
