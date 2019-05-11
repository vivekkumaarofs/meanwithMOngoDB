import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRegComponent } from './new-reg/new-reg.component';

const routes: Routes = [{path: '', component: NewRegComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
