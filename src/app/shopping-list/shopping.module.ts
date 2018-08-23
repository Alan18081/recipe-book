import {NgModule} from '@angular/core';
import {ShoppingService} from './shopping.service';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from '../auth/auth-guard.service';
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ShoppingService,
    AuthGuard
  ]
})
export class ShoppingModule {}
