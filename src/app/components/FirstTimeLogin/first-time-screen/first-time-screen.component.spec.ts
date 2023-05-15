import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeScreenComponent } from './first-time-screen.component';

describe('FirstTimeScreenComponent', () => {
  let component: FirstTimeScreenComponent;
  let fixture: ComponentFixture<FirstTimeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTimeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstTimeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
