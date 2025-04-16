import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso-component',
  standalone: true,
  templateUrl: './acesso-component.component.html',
})
export class AcessoComponent {
  idade: number = 18;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) this.idade--;
  }
}