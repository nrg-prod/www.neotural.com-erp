import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PurchaseAddComponent } from './purchaseadd.component';

describe('PurchaseaddComponent', () => {
  let component: PurchaseAddComponent;
  let fixture: ComponentFixture<PurchaseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAddComponent ]
    })
    .compileComponents();
  }));


describe('PurchaseaddComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PurchaseAddComponent],
            imports: [ReactiveFormsModule],  // Also add it to 'imports' array
        })
        .compileComponents();
    }));
});
  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
