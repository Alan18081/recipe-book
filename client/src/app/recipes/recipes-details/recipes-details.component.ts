import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setRecipe(this.route.snapshot.params.id);
    this.route.params.subscribe((params: Params) => {
      this.setRecipe(params.id);
    });
  }
  setRecipe(id): void {
    this.recipe = this.recipesService.getRecipeById(id);
  }
}
