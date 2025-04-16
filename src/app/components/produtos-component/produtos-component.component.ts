import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos-component',
  standalone: true,
  templateUrl: './produtos-component.component.html',
  styleUrls: ['./produtos-component.component.css'],
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Notebook', preco: 3000, promocao: true },
    { nome: 'Mouse', preco: 50, promocao: false },
  ];
}