import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fakehome',
  templateUrl: './fakehome.component.html',
  styleUrls: ['./fakehome.component.scss']
})
export class FakehomeComponent {
  constructor(private route: ActivatedRoute,
    private router: Router )
    {
      this.router.navigateByUrl('/fakehome')
    }
}
