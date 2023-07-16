import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesComponent } from './depenses.component';

describe('DepensesComponent', () => {
  let component: DepensesComponent;
  let fixture: ComponentFixture<DepensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepensesComponent]
    });
    fixture = TestBed.createComponent(DepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
