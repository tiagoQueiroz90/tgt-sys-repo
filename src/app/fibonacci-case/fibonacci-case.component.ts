import { Component, Input } from '@angular/core';
import { FibonacciCalculate } from '../services/fibonacci-calculate.service';

@Component({
  selector: 'app-fibonacci-case',
  templateUrl: './fibonacci-case.component.html',
  styleUrls: ['./fibonacci-case.component.css']
})
export class FibonacciCaseComponent {

  @Input() inputNumber: number = 0;
  message!: string;

  constructor(private readonly fibonacciCalculate: FibonacciCalculate) {}

  calcularFibonacci() {
    this.message = this.fibonacciCalculate.checkFibonacci(this.inputNumber);
  }

  desabilitarBotao(): boolean {
    return this.inputNumber === null || this.inputNumber === undefined;
  }
}
