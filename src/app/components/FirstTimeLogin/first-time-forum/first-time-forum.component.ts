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
    console.log(this.password)
    console.log(this.validatePassword(this.password))
    if (this.password!=this.Repassword || this.password=='')
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#%])[A-Za-z\d!#%]{8,32}$/;
    console.log(password)
    return passwordRegex.test(password);
  }
}
