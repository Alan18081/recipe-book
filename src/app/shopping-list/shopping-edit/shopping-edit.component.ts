import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<{name: string; amount: number}>();
  name: string;
  amount: number;
  constructor() { }

  ngOnInit() {
  }

  addIngredient(): void {
    this.ingredientAdded.emit({
      name: this.name,
      amount: this.amount
    });
  }

}
