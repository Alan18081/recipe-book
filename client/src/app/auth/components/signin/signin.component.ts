import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { IAppState } from '../../../store.interface';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [
    trigger('fadeIn', [
      state('shown', style({
        opacity: 1,
        transform: 'rotateY(0deg)'
      })),
      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'rotateY(-180deg)'
        }),
        animate(800)
      ])
    ])
  ]
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
