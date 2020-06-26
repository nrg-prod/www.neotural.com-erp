import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurchasereportComponent } from './all-purchasereport.component';

describe('AllPurchasereportComponent', () => {
  let component: AllPurchasereportComponent;
  let fixture: ComponentFixture<AllPurchasereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPurchasereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurchasereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
