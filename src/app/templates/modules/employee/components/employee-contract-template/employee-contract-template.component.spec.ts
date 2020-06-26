import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContractTemplateComponent } from './employee-contract-template.component';

describe('EmployeeContractTemplateComponent', () => {
  let component: EmployeeContractTemplateComponent;
  let fixture: ComponentFixture<EmployeeContractTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContractTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
