import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sportingScoutFrontend';
  constructor(private route: ActivatedRoute,
    private router: Router )
    {
      this.route=route
      this.router=router
    }

    ngOnInit(): void {
      this.router.navigate(["fakehome"], { relativeTo: this.route });
    }

}
