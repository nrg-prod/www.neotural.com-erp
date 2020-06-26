import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStockreportComponent } from './all-stockreport.component';

describe('AllStockreportComponent', () => {
  let component: AllStockreportComponent;
  let fixture: ComponentFixture<AllStockreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStockreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStockreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
