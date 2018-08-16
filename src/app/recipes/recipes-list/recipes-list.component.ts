import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    const myObesrvable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First value');
      }, 2000);
      setTimeout(() => {
        observer.error('Second value');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
    });

    myObesrvable.subscribe((data: string) => {
      console.log('Data', data);
    }, (data: string) => {
      console.log('Error', data);
    });
  }

  selectRecipe(recipe: Recipe) {
    this.recipesService.recipeSelected.emit(recipe);
  }
}
