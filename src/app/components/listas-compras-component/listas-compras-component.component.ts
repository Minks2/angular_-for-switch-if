import { Component } from '@angular/core';

@Component({
  selector: 'app-listas-compras-component',
  standalone: true,
  templateUrl: './listas-compras-component.component.html',
})
export class ListaComprasComponent {
  itens: string[] = ['Maçã', 'Banana', 'Leite'];
}