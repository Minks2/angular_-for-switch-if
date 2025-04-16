import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-component.component.html',
})
export class CalculadoraComponent {
  valor1: number = 0;
  valor2: number = 0;
  operacao: string = 'soma';

  calcular(): number | undefined {
    if (this.operacao === 'divisao' && this.valor2 === 0) {
      return undefined; // Retorna undefined em caso de divisão por zero
    }
    switch (this.operacao) {
      case 'soma':
        return this.valor1 + this.valor2;
      case 'subtracao':
        return this.valor1 - this.valor2;
      case 'multiplicacao':
        return this.valor1 * this.valor2;
      case 'divisao':
        return this.valor1 / this.valor2;
      default:
        return undefined;
    }
  }
}