import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios-component',
  standalone: true,
  templateUrl: './usuarios-component.component.html',
})
export class UsuariosComponent {
  usuarios = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 30 },
  ];
}