import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  validarLogin(): string {
    if (!this.email || !this.senha) {
      return 'Campos obrigatórios!';
    }
    if (!this.email.includes('@') || this.senha.length < 6) {
      return 'Credenciais inválidas!';
    }
    return 'Login bem-sucedido!';
  }
}