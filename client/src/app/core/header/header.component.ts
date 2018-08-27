import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../../auth/store/auth.reducer';
import {IAppState} from '../../store';
import * as AuthActions from '../../auth/store/auth.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
  animations: [
    trigger('slideDown', [
      state('shown', style({
        transform: 'translateY(0)'
      })),
      transition('void <=> *', [
        style({
          transform: 'translateY(-100px)'
        }),
        animate(800)
      ])
    ])
  ]
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
