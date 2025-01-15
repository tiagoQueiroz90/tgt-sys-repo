import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaComponent } from './soma.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
