import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ViewChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @ViewChild('list') list: ElementRef;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 10)
  ];
  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  onIngredientAdded(ingredientAdded: {name: string, amount: number}): void {
   const newIngredient = new Ingredient(ingredientAdded.name, ingredientAdded.amount);
   this.ingredients.push(newIngredient);
  }
  ngAfterContentInit() {
    console.log(this.list.nativeElement);
  }
}
