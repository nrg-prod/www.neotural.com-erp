import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAndCustomerComponent } from './vendor-and-customer.component';

describe('VendorAndCustomerComponent', () => {
  let component: VendorAndCustomerComponent;
  let fixture: ComponentFixture<VendorAndCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorAndCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAndCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
