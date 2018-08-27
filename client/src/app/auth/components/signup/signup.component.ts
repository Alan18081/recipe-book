import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store';
import {SignUp} from '../../store/auth.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('fadeIn', [
      state('shown', style({
        opacity: 1,
        transform: 'rotateY(0deg)'
      })),
      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'rotateY(180deg)'
        }),
        animate(800)
      ])
    ])
  ]
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
