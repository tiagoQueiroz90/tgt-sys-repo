import { Component } from '@angular/core';
import { FaturamentoService } from '../services/faturamento.service';

@Component({
  selector: 'app-faturamento-distribuidora',
  templateUrl: './faturamento-distribuidora.component.html',
  styleUrls: ['./faturamento-distribuidora.component.css']
})
export class FaturamentoDistribuidoraComponent {

  menorValor!: number;
  maiorValor!: number;
  diasAcimaMedia!: number;
  faturamentoEstado: any[]=[];

  displayedColumns: string[] = ['UF', 'Faturamento', 'Percentual'];
  dataSource = this.faturamentoEstado;

  constructor(private readonly faturamentoDistribuidora: FaturamentoService) {}

  ngOnInit() {
    const resultados = this.faturamentoDistribuidora.calcularFaturamento();
    this.menorValor = resultados.menorValor;
    this.maiorValor = resultados.maiorValor;
    this.diasAcimaMedia = resultados.diasAcimaMedia;
    this.faturamentoEstado = resultados.porEstado;
  }
}
