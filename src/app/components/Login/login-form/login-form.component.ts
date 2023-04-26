import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  email: string = '';
  password: string;
  emailInvalid: boolean = false;
  formLoading: boolean = false;
  passwordFieldType: string = 'password';

  submitForm() {
    if (!this.validateEmail(this.email)) {
      this.emailInvalid = true;
      return;
    }
    this.emailInvalid = false; // Reset emailInvalid flag to false
    this.formLoading = true;
    // code to submit the form goes here
    //ay 7aga 3al console
    console.log('email: ', this.email);
  }
  

  private validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
