import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css'],
})
export class SomaComponent implements OnInit {
  somaValues: number[] = [];
  indice = 13;

  ngOnInit(): void {
    this.calcularSoma();
  }

  calcularSoma(): void {
    let SOMA = 0;

    for (let K = 1; K <= this.indice; K++) {
      SOMA += K;
      this.somaValues.push(SOMA);
    }
  }
}
