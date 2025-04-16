import { Component } from '@angular/core';

@Component({
  selector: 'app-valor-component',
  standalone: true,
  templateUrl: './valor-component.component.html',
})
export class ValorComponent {
  valor: number | string = 1;

  mudarValor(novoValor: number | string) {
    this.valor = novoValor;
  }
}