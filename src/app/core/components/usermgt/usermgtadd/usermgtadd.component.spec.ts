import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermgtaddComponent } from './usermgtadd.component';

describe('UsermgtaddComponent', () => {
  let component: UsermgtaddComponent;
  let fixture: ComponentFixture<UsermgtaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermgtaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermgtaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
