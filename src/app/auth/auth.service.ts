import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {IAppState} from '../store';
import {Store} from '@ngrx/store';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private store: Store<IAppState>
  ) {}
  signupUser(email: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.SignUp());
      })
      .catch(error => console.log(error));
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.store.dispatch(new AuthActions.SetToken(token));
          });
      })
      .catch(error => console.log(error));
  }


  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    firebase.auth().signOut();
    this.token = null;
  }
}
