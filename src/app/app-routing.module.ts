import 'tslib';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/Login/login-screen/login-screen.component';
import { HomeComponent } from './components/home/screen/HomeScreen.component';

const routes: Routes = [
  {path: 'home' ,component: HomeComponent},
  {path: 'login', component: LoginScreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
