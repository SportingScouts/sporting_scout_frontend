import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakehomeComponent } from './fakehome.component';

describe('FakehomeComponent', () => {
  let component: FakehomeComponent;
  let fixture: ComponentFixture<FakehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
