import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  constructor(private route: ActivatedRoute,
    private router: Router )
    {
      this.router.navigateByUrl('/home')
    }
}
