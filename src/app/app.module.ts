import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutesModule } from './app-routes.module';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import {ModalComponent} from './components/modal/modal.component';
import { CanDeactivateGuard } from './canDeactivateService';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { UsersSevice } from './users.sevice';
import { FormComponent } from './form/form.component';

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
    AddRecipeComponent,
    NotFoundComponent,
    EditRecipeComponent,
    ModalComponent,
    ErrorPageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingService, RecipesService, CanDeactivateGuard, UsersSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
