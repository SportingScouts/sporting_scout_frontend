import 'tslib';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/Login/login-screen/login-screen.component';
import { HomeScreenComponent } from './components/Home/home-screen/home-screen.component';

const routes: Routes = [
  {path: 'home' ,component: HomeScreenComponent},
  {path: 'login', component: LoginScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
