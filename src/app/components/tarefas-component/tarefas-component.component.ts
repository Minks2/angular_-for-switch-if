import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas-component',
  standalone: true,
  templateUrl: './tarefas-component.component.html',
})
export class TarefasComponent {
  tarefas: string[] = ['Estudar Angular', 'Fazer exercícios', 'Revisar código'];

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}