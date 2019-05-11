import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Form Module//login/login.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { TableHerosComponent } from './components/table-heros/table-heros.component';
import { SignupComponent } from './components/Form Module/signup/signup.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
// import { LoginSingnupModule } from './components/Form Module/LoginSignup.module';

const routes: Routes = [
  {path: '', redirectTo: 'formModule', pathMatch: 'full'},
  // {
  //     path: 'formModule',
  //     loadChildren: '../Form Module/LoginSignup.module#LoginSingnupModule'
  // },
  {
    path: 'newRegistration',
    loadChildren: './registration/registration.module#RegistrationModule'
  },
  { path: 'Table', component: TableHerosComponent },
  { path: 'Document', component: DocumentationComponent },
  { path: 'Blog', component: BlogComponentComponent },
  // { path: 'Login', component: LoginComponent},
  { path: 'singup', component: SignupComponent},
  { path: 'Employee' , component: EmployeeComponent},
  { path: 'EmployeeList', component: EmployeelistComponent},





  { path: '**', component: PageNotFoundComponent }


];

/* page not found in path ** used in routes */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
