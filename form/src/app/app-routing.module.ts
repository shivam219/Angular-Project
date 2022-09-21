import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch :"full"
  },
  
  {
    path:"form",
    component:FormComponent,
    pathMatch :"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
