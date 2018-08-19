import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingService} from './shopping-list/shopping.service';
import {RecipesService} from './recipes/recipes.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutesModule } from './app-routes.module';
import {ModalComponent} from './components/modal/modal.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { UsersSevice } from './users.sevice';
import {RecipeResolverService} from './recipe-resolver.service';
import {ShortenPipe} from './recipes/recipes-list/recipes-item/shorten.pipe';
import {HttpClientModule} from '@angular/common/http';
import {ServerService} from './server.service';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {ShoppingModule} from './shopping-list/shopping.module';
import {AuthGuard} from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
// import {RecipesModule} from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    ModalComponent,
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
  ],
  providers: [
    ShoppingService,
    RecipesService,
    UsersSevice,
    RecipeResolverService,
    ServerService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
