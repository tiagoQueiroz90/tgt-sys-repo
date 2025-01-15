import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciCalculate {

  constructor() { }

  checkFibonacci(num: number): string {
    if (num < 0) {
      return `${num} não pertence à sequência de Fibonacci.`;
    }

    let a = 0;
    let b = 1;

    for (; a <= num; ) {
      if (a === num) {
        return `${num} pertence à sequência de Fibonacci.`;
      }
      
      const next = a + b;
      a = b;
      b = next;
    }

    return `${num} não pertence à sequência de Fibonacci.`;
  }
}
