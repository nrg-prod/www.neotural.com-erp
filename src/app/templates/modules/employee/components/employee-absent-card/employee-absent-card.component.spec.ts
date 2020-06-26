import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAbsentCardComponent } from './employee-absent-card.component';

describe('EmployeeAbsentCardComponent', () => {
  let component: EmployeeAbsentCardComponent;
  let fixture: ComponentFixture<EmployeeAbsentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAbsentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAbsentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
