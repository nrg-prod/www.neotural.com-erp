import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereportComponent } from './purchasereport.component';

describe('PurchasereportComponent', () => {
  let component: PurchasereportComponent;
  let fixture: ComponentFixture<PurchasereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
