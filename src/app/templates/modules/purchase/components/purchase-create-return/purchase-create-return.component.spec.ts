import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCreateReturnComponent } from './purchase-create-return.component';

describe('PurchaseCreateReturnComponent', () => {
  let component: PurchaseCreateReturnComponent;
  let fixture: ComponentFixture<PurchaseCreateReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCreateReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCreateReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
