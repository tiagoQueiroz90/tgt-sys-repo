import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaturamentoDistribuidoraComponent } from './faturamento-distribuidora/faturamento-distribuidora.component';
import { FibonacciCaseComponent } from './fibonacci-case/fibonacci-case.component';
import { ReverteStringComponent } from './reverte-string/reverte-string.component';
import { SomaComponent } from './soma/soma.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciCaseComponent,
    FaturamentoDistribuidoraComponent,
    ReverteStringComponent,
    SomaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
