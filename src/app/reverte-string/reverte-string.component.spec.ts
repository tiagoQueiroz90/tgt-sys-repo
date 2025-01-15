import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverteStringComponent } from './reverte-string.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ReverteStringComponent', () => {
  let component: ReverteStringComponent;
  let fixture: ComponentFixture<ReverteStringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverteStringComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ReverteStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
