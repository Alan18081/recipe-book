import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';
import {AddRecipeComponent} from './edit-recipe/add-recipe.component';
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component';
import {RecipeResolverService} from '../recipe-resolver.service';
import {RecipesComponent} from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: 'new',
        component: AddRecipeComponent
      },
      {
        path: ':id',
        component: RecipesDetailsComponent,
        resolve: {
          recipe: RecipeResolverService
        }
      },
      {
        path: ':id/edit',
        component: AddRecipeComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class RecipesRoutesModule {}
