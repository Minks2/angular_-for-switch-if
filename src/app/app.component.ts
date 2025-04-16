 import { Component } from '@angular/core';
 import { MesComponent } from './components/mes-component/mes-component.component';
 import { ListaComprasComponent } from './components/listas-compras-component/listas-compras-component.component';
 import { AcessoComponent } from './components/acesso-component/acesso-component.component';
 import { TarefasComponent } from './components/tarefas-component/tarefas-component.component';
 import { StatusPedidoComponent } from './components/status-pedido-component/status-pedido-component.component';
 import { UsuariosComponent } from './components/usuarios-component/usuarios-component.component';
 import { ValorComponent } from './components/valor-component/valor-component.component';
 import { LoginComponent } from './components/login-component/login-component.component';
 import { ProdutosComponent } from './components/produtos-component/produtos-component.component';
 import { CalculadoraComponent } from './components/calculadora-component/calculadora-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
     MesComponent,
     ListaComprasComponent,
     AcessoComponent,
     TarefasComponent,
     StatusPedidoComponent,
     UsuariosComponent,
     ValorComponent,
     LoginComponent,
     ProdutosComponent,
     CalculadoraComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'Atividade 1 - Checkpoint 2';
}