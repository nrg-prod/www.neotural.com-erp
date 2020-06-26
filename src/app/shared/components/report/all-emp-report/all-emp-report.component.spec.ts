import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpReportComponent } from './all-emp-report.component';

describe('AllEmpReportComponent', () => {
  let component: AllEmpReportComponent;
  let fixture: ComponentFixture<AllEmpReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmpReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
