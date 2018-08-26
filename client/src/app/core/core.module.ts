import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutesModule } from '../app-routes.module';
import { ShoppingService } from '../shopping-list/shopping.service';
import { RecipesService } from '../recipes/recipes.service';
import { UsersSevice } from '../users.sevice';
import { RecipeResolverService } from '../recipe-resolver.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoutesModule
  ],
  exports: [
    HeaderComponent,
    AppRoutesModule
  ],
  providers: [
    ShoppingService,
    RecipesService,
    UsersSevice,
    RecipeResolverService,
    AuthGuard
  ]
})
export class CoreModule {}
