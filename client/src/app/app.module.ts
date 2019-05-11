import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/Form Module/login/login.component';
import { SignupComponent } from './components/Form Module/signup/signup.component';
import { TableHerosComponent } from './components/table-heros/table-heros.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { HiddenComponent } from './components/hidden/hidden.component';
// import { LoginSingnupModule } from './components/Form Module/LoginSignup.module';
import { HttpClientModule } from '@angular/common/http';
import { HightlightDirective } from './common/hightlight.directive';
import { TransformLanguagePipe } from './common/transform-language.pipe';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ApiService } from './common/api.service';
import { CommunicateService } from './common/communicate.service';
// import { RegistrationModule } from './registration/registration.module';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponentComponent,
    HeaderComponent,
    // LoginComponent,
    SignupComponent,
    TableHerosComponent,
    DocumentationComponent,
    PageNotFoundComponent,
    HiddenComponent,
    HightlightDirective,
    TransformLanguagePipe,
    EmployeeComponent,
    EmployeelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // LoginSingnupModule,
    FormsModule,
    // RegistrationModule
  ],
  providers: [ApiService, CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
