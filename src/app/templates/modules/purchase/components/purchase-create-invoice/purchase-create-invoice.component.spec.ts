import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCreateInvoiceComponent } from './purchase-create-invoice.component';

describe('PurchaseCreateInvoiceComponent', () => {
  let component: PurchaseCreateInvoiceComponent;
  let fixture: ComponentFixture<PurchaseCreateInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCreateInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCreateInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
