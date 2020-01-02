import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindriveComponent } from './admindrive.component';

describe('AdmindriveComponent', () => {
  let component: AdmindriveComponent;
  let fixture: ComponentFixture<AdmindriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
