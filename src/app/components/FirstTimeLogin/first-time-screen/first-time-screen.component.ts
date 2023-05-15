import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-first-time-screen',
  templateUrl: './first-time-screen.component.html',
  styleUrls: ['./first-time-screen.component.scss']
})
export class FirstTimeScreenComponent {
  constructor(private route: ActivatedRoute,
    private router: Router )
    {
      this.router.navigateByUrl('/first-time')
    }
}
