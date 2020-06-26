import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSalesreportComponent } from './all-salesreport.component';

describe('AllSalesreportComponent', () => {
  let component: AllSalesreportComponent;
  let fixture: ComponentFixture<AllSalesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSalesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSalesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
