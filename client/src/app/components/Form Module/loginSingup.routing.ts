import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'singup', component: SignupComponent},
];

/* page not found in path ** used in routes */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginSignupRoutingModule { }
