import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChecinCheckoutComponent } from './employee-checkin-checkout.component';

describe('EmployeeChecinCheckoutComponent', () => {
  let component: EmployeeChecinCheckoutComponent;
  let fixture: ComponentFixture<EmployeeChecinCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeChecinCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeChecinCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
