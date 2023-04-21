import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { FakehomeComponent } from './fake/fakehome/fakehome.component';
import { NextpageComponent } from './fake/nextpage/nextpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FakehomeComponent,
    NextpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
