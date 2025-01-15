import { TestBed } from '@angular/core/testing';

import { FibonacciCalculate } from './fibonacci-calculate.service';

describe('FibonacciServiceService', () => {
  let service: FibonacciCalculate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciCalculate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
