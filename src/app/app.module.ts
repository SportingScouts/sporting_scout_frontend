import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/Login/login-screen/login-screen.component';
import { LoginFormComponent } from './components/Login/login-form/login-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { HomeScreenComponent } from './components/Home/home-screen/home-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginFormComponent,
    TextFieldComponent,
    HomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
