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
}