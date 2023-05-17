import { Component } from '@angular/core';

@Component({
  selector: 'app-first-time-forum',
  templateUrl: './first-time-forum.component.html',
  styleUrls: ['./first-time-forum.component.scss']
})
export class FirstTimeForumComponent {
  password: string = "";
  Repassword: string = "";
  passwordInvalid: boolean = false;
  formLoading: boolean = false;
  passwordFieldType: string = 'password';
  readyToRoute: boolean=false;


  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  matchcriteria(){
    if (this.password!=this.Repassword || !this.validatePassword(this.password))
    {
      console.log("dont match");
      this.passwordInvalid=true;
    }
    else {
      console.log("match");
      this.passwordInvalid=false;
      this.readyToRoute=true;
    }
  }
  private validatePassword(password: string) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/;
    return passwordRegex.test(password);
  }
}
