import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeForumComponent } from './first-time-forum.component';

describe('FirstTimeForumComponent', () => {
  let component: FirstTimeForumComponent;
  let fixture: ComponentFixture<FirstTimeForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTimeForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstTimeForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
