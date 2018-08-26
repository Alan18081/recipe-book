import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store';
import {SignUp} from '../../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    const {email, password, username} = form.value;
    this.store.dispatch(new SignUp({email, password, username}));
  }
}
