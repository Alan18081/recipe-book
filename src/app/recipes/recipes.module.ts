import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesRoutesModule} from './recipes-routes.module';
import {SharedModule} from '../shared/shared.module';
import {FilterPipe} from './filter.pipe';
import {AddRecipeComponent} from './edit-recipe/add-recipe.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    RecipesItemComponent,
    FilterPipe,
    AddRecipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutesModule,
    SharedModule
  ]
})
export class RecipesModule {}
