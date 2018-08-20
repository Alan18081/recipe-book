import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'shopping',
    pathMatch: 'full'
  },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'shopping', loadChildren: './shopping-list/shopping.module#ShoppingModule' },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
