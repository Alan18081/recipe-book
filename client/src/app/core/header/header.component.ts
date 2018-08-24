import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  authState: Observable<IAuthState>;
  constructor(
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  logout() {
    this.authService.logout();
  }
}
