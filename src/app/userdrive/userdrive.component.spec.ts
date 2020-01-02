import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdriveComponent } from './userdrive.component';

describe('UserdriveComponent', () => {
  let component: UserdriveComponent;
  let fixture: ComponentFixture<UserdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
