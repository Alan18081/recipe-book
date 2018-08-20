import {
  Component,
  OnInit
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  list: Ingredient[];
  onIngredientAdded(ingredientAdded: {name: string, amount: number}): void {
   const newIngredient = new Ingredient(ingredientAdded.name, ingredientAdded.amount);
   this.shoppingService.addIngredient(newIngredient);
  }
  constructor(private shoppingService: ShoppingService) {}
  ngOnInit() {
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.list = ingredients;
    });
  }
}
