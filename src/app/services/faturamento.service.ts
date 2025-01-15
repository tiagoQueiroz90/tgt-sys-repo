import { Injectable } from '@angular/core';

import data from '../../assets/data.json';
import dados from '../../assets/dados.json';

import { Faturamento, FaturamentoEstado } from '../models/faturamento.model';

@Injectable({
  providedIn: 'root',
})
export class FaturamentoService {

  private readonly data: Faturamento[] = data;
  private readonly dados: FaturamentoEstado[] = dados;
  
  menorFaturamento(): number {
    return Math.min(...this.data.filter(d => d.valor > 0).map(d => d.valor));
  }

  calcularPercentualPorEstado() {
    const totalFaturamento = this.dados.reduce((total, estado) => total + estado.valor, 0);

    return dados.map(estado => ({
      estado: estado.uf,
      valor: estado.valor,
      percentual: ((estado.valor / totalFaturamento) * 100).toFixed(2) + '%',
    }));
  }

  maiorFaturamento(): number {
    return Math.max(...this.data.map(d => d.valor));
  }

  diasAcimaDaMedia(): number {
    const diasComFaturamento = this.data.filter(d => d.valor > 0);
    const mediaMensal =
      diasComFaturamento.reduce((total, d) => total + d.valor, 0) /
      diasComFaturamento.length;

    return diasComFaturamento.filter(d => d.valor > mediaMensal).length;
  }

  calcularFaturamento() {
    return {
      menorValor: this.menorFaturamento(),
      maiorValor: this.maiorFaturamento(),
      diasAcimaMedia: this.diasAcimaDaMedia(),
      porEstado: this.calcularPercentualPorEstado()
    };
  }
}
