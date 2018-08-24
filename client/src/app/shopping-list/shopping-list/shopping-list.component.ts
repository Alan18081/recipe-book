import {
  Component,
  OnInit
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { IAppState, IShoppingList } from '../store/shopping-list.reducer';
import * as actions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Observable<IShoppingList>;
  onIngredientAdded(ingredientAdded: {name: string, amount: number}): void {
   const newIngredient = new Ingredient(ingredientAdded.name, ingredientAdded.amount);
   this.shoppingService.addIngredient(newIngredient);
  }
  constructor(private shoppingService: ShoppingService, private store: Store<IAppState>) {}
  ngOnInit() {
    this.shoppingList = this.store.select('shoppingList');
  }
  selectIngredient(ingredient) {
   this.store.dispatch(new actions.StartEditing(ingredient));
  }
}
