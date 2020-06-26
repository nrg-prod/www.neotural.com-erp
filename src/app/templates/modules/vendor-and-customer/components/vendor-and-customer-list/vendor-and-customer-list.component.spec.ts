import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VendorAndCustomerListComponent } from "./vendor-and-customer-list.component";

describe("VendorListComponent", () => {
  let component: VendorAndCustomerListComponent;
  let fixture: ComponentFixture<VendorAndCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAndCustomerListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAndCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
