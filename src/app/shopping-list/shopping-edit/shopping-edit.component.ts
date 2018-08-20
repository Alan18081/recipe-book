import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<{name: string; amount: number}>();
  name: string;
  amount: number;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  addIngredient(): void {
    this.store.dispatch(new ShoppingListActions.AddIngredient({
      name: this.name,
      amount: this.amount
    }));
  }

}
