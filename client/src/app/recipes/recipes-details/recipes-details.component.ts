import { Component, OnInit} from '@angular/core';
import {Recipe} from '../interfaces/recipe.interface';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {IFeatureState, IRecipesState} from '../store/recipes.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
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
