import { Component, OnInit} from '@angular/core';
import {Recipe} from '../interfaces/recipe.interface';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {IFeatureState, IRecipesState} from '../store/recipes.reducer';
import {map} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css'],
  animations: [
    trigger('appear', [
      state('shown', style({
        transform: 'translateX(0)'
      })),
      transition('void <=> shown', [
        style({
          transform: 'translateX(300px)'
        }),
        animate(400)
      ])
    ])
  ]
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Observable<Recipe>;
  constructor(private store: Store<IFeatureState>) { }

  ngOnInit() {
    this.recipe = this.store
      .select('recipes')
      .pipe(map((recipesState: IRecipesState) => {
        return recipesState.activeRecipe;
      }))
  }
}
