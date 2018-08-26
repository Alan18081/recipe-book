import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../../auth/store/auth.reducer';
import {IAppState} from '../../store';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  authState: Observable<IAuthState>;
  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
