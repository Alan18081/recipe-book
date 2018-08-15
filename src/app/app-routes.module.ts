import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {EditRecipeComponent} from './recipes/edit-recipe/edit-recipe.component';
import {CanDeactivateGuard} from './canDeactivateService';


const appRoutes: Routes = [
  {
    path: '',
    component: RecipesListComponent,
    children: [
      {
        path: 'recipes/new',
        component: AddRecipeComponent
      },
      {
        path: 'recipes/:id',
        component: RecipesDetailsComponent
      },
      {
        path: 'recipes/:id/edit',
        component: EditRecipeComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
