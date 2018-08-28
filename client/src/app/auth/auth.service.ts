import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ILoginInfo} from './interfaces/login-info.interface';
import {ISignUpInfo} from './interfaces/signup-info.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  login(loginInfo: ILoginInfo): Observable<any> {
    return this.http.post('/login', loginInfo);
  }

  signUp(signUpInfo: ISignUpInfo): Observable<any> {
    return this.http.post('/signup', signUpInfo);
  }

  getTokenInfo() {
    return {
      token: localStorage.getItem('authToken'),
      expiresIn: localStorage.getItem('expiresIn')
    };
  }

  getUser() {
    return this.http.get('/currentUser');
  }

  removeTokenInfo() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('expiresIn');
  }

  setTokenInfo(token, expiresIn) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('expiresIn', expiresIn);
  }
}
