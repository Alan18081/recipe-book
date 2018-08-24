import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { IAppState } from '../../store.interface';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private store: Store<IAppState>) { }
  ngOnInit() {
  }
  submit(form: NgForm): void {
    const {email, password} = form.value;
    this.store.dispatch(new AuthActions.Login({
      email,
      password
    }));
  }
}
