import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {Store} from '@ngrx/store';
import {IAppState} from './store';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.GetCurrentUser());
  }
}
