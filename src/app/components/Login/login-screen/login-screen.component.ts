import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  constructor(private route: ActivatedRoute,
    private router: Router )
    {
      this.router.navigateByUrl('/login')
    }
}
