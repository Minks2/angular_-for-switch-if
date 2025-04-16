import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mes-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mes-component.component.html',
})
export class MesComponent {
  mes: number = 1;
}