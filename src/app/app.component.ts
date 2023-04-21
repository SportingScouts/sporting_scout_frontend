import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sportingScoutFrontend';
  constructor(private route: ActivatedRoute,
    private router: Router )
    {
      this.route=route
      this.router=router  
    }

}
