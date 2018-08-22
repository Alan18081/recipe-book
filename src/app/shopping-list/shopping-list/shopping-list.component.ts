import {
  Component,
  OnInit
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IAppState} from '../../store';
import {IShoppingListState} from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Observable<IShoppingListState>;
  constructor(private shoppingService: ShoppingService, private store: Store<>) {}
  ngOnInit() {
    this.shoppingList = this.store.select('shoppingList');
  }
}
