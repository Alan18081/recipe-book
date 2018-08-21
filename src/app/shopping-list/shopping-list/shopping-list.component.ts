import {
  Component,
  OnInit
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Observable<{ingredients: Ingredient[]}>;
  onIngredientAdded(ingredientAdded: {name: string, amount: number}): void {
   const newIngredient = new Ingredient(ingredientAdded.name, ingredientAdded.amount);
   this.shoppingService.addIngredient(newIngredient);
  }
  constructor(private shoppingService: ShoppingService, private store: Store<{shoppingList: {
    inredients: Ingredient[]
  }}>) {}
  ngOnInit() {
    this.shoppingList = this.store.select('shoppingList');
  }
}
