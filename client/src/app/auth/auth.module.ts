import {NgModule} from '@angular/core';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {AuthRoutesModule} from './auth-routes.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutesModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}
