import {NgModule} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RecipesResolver } from './recipes/recipes-resolver.service';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'shopping',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule',
    canActivate: [AuthGuard],
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule {}
