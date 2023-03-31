import { Component } from '@angular/core';

@Component({
  selector: 'app-login-field',
  templateUrl: './login-field.component.html',
  styleUrls: ['./login-field.component.scss']
})
export class LoginFieldComponent {
  public email: string;
  public password: string;
  public showPassword: boolean = false; // new property to toggle password visibility

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    // ay 7aga 3ala el console
    console.log('email: ' + this.email + ' password: ' + this.password);
  }
}