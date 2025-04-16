import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-pedido-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './status-pedido-component.component.html',
})
export class StatusPedidoComponent {
  status: string = 'pendente';
}