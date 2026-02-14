import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  iniciarSesion() {
 
    if (!this.username || !this.password) {
      this.error = 'Debes ingresar usuario y contraseña';
      return;
    }

    if (this.username.length > 50 || this.password.length > 50) {
      this.error = 'Usuario o contraseña demasiado largos';
      return;
    }


    const correcto = this.auth.login(this.username, this.password);

    if (correcto) {

      if (this.auth.usuarioActual?.role === 'chef') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/menu']);
      }
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
