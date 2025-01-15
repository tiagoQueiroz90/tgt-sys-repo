import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciCaseComponent } from './fibonacci-case.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FibonacciCaseComponent', () => {
  let component: FibonacciCaseComponent;
  let fixture: ComponentFixture<FibonacciCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciCaseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FibonacciCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
