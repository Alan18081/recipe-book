import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingService} from './shopping-list/shopping.service';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import {RecipesService} from './recipes/recipes.service';

const appRoutes: Routes = [
  { path: '', component: RecipesListComponent },
  { path: 'recipes/new', component: AddRecipeComponent },
  { path: 'shopping', component: ShoppingListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingEditComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    RecipesItemComponent,
    DropdownDirective,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingService,RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
