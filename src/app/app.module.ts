import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {ShortenPipe} from './recipes/recipes-list/recipes-item/shorten.pipe';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {ShoppingModule} from './shopping-list/shopping.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {shoppingListReducer} from './shopping-list/store/shopping-list.reducer';
import { authReducer } from './auth/store/auth.reducer';
// import {RecipesModule} from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ShortenPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    ShoppingModule,
    AppRoutesModule,
    CoreModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer,
      auth: authReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
