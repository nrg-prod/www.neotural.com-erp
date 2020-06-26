import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAbsenceComponent } from './employee-absence.component';

describe('EmployeeAbsenceComponent', () => {
  let component: EmployeeAbsenceComponent;
  let fixture: ComponentFixture<EmployeeAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
