import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentoDistribuidoraComponent } from './faturamento-distribuidora.component';
import { CurrencyPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FaturamentoDistribuidoraComponent', () => {
  let component: FaturamentoDistribuidoraComponent;
  let fixture: ComponentFixture<FaturamentoDistribuidoraComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
       declarations: [FaturamentoDistribuidoraComponent],
       providers: [CurrencyPipe],
       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
     });
    fixture = TestBed.createComponent(FaturamentoDistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o AppComponent', () => {
    expect(component).toBeTruthy();
  });
});
