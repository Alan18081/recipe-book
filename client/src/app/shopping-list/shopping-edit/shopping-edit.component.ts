import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';
import { IAppState } from '../../store.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  form: FormGroup;
  isEditing: boolean;
  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.select('shoppingList')
      .subscribe(({activeIngredient, isEditing}) => {
        this.isEditing = isEditing;
        let name: string;
        let amount: number ;
        if (activeIngredient) {
          name = activeIngredient.name;
          amount = activeIngredient.amount;
        }
        this.form = new FormGroup({
          name: new FormControl(name, Validators.required),
          amount: new FormControl(amount, [Validators.required, Validators.pattern(/^\d+$/)])
        });
      });
  }

  addIngredient(): void {
    const name = this.form.get('name').value;
    const amount = this.form.get('amount').value;
    if (this.isEditing) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        name, amount
      }));
    } else {
      const newIngredient = new Ingredient(name, amount);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
  }

  removeIngredient(): void {
    this.store.dispatch(new ShoppingListActions.RemoveIngredient());
  }
}
