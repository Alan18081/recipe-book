import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {ShortenPipe} from './recipes/recipes-list/recipes-item/shorten.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {ShoppingModule} from './shopping-list/shopping.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {BaseUrlInterceptor} from './shared/base-url.interceptor';
import {TokenInterceptor} from './shared/token.interceptor';
import {RecipesEffects} from './recipes/store/recipes.effects';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ShortenPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'server-app'}),
    FormsModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    ShoppingModule,
    AppRoutesModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, RecipesEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule : []
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
