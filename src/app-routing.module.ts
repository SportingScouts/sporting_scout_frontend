import 'tslib';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import {FakehomeComponent} from './app/fake/fakehome/fakehome.component';
import{NextpageComponent} from './app/fake/nextpage/nextpage.component'

const routes: Routes = [

  {path: '' , component:AppComponent},
  {path: 'fakehome' ,component: FakehomeComponent},
  {path: 'nextpage', component: NextpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
