import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettycashaddComponent } from './pettycashadd.component';

describe('PettycashaddComponent', () => {
  let component: PettycashaddComponent;
  let fixture: ComponentFixture<PettycashaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettycashaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettycashaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
