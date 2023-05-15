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


  private validatePassword(password: string) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!#%])[A-Za-z0-9!#%]{8,32}$/;
    return passwordRegex.test(password);
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  matchcriteria(){
    console.log(this.validatePassword(this.password))
    if (this.password!=this.Repassword )
    {
      console.log("dont match");
      this.passwordInvalid=true;
    }
    else {
      console.log("match");
      this.passwordInvalid=false;
    }
  }
}
