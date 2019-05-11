import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginSignupRoutingModule } from './loginSingup.routing';
import { LoginSingupAppComponent } from './loginSingupChild.component';

@NgModule({
  declarations: [
    LoginComponent,
    // SignupComponent,
  ],
  imports: [
    BrowserModule,
    LoginSignupRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginSingnupModule { }
