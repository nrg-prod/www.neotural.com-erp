import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VendorAndCustomerDetailComponent } from "./vendor-and-customer-detail.component";

describe("VendorDetailComponent", () => {
  let component: VendorAndCustomerDetailComponent;
  let fixture: ComponentFixture<VendorAndCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAndCustomerDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAndCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
