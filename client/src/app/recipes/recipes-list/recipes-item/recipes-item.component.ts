import { Component, Input} from '@angular/core';
import {Recipe} from '../../interfaces/recipe.interface';
import {IFeatureState} from '../../store/recipes.reducer';
import {Store} from '@ngrx/store';
import * as RecipesActions from '../../store/recipes.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
  animations: [
    trigger('recipeItem', [
      state('shown', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
     transition('void <=> shown', [
       style({
         opacity: 0,
         transform: 'translateX(-300px)'
       }),
       animate(500)
     ])
    ])
  ]
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;
  constructor(private store: Store<IFeatureState>) { }

  selectEvent() {
    this.store.dispatch(new RecipesActions.SelectRecipe(this.recipe));
  }
}
