import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFinancereportComponent } from './all-financereport.component';

describe('AllFinancereportComponent', () => {
  let component: AllFinancereportComponent;
  let fixture: ComponentFixture<AllFinancereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFinancereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFinancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
