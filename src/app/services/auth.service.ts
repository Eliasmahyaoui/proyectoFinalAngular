import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioActual: Usuario | null = null;

  usuarios: Usuario[] = [
    {
      id: 1,
      username: 'chef',
      password: '1234',
      email: 'chef@restaurante.com',
      role: 'chef'
    },
    {
      id: 2,
      username: 'cliente',
      password: '1234',
      email: 'cliente@restaurante.com',
      role: 'user'
    }
  ];

  login(username: string, password: string): boolean {

    const usuario = this.usuarios.find(
      u => u.username === username && u.password === password
    );

    if (usuario) {
      this.usuarioActual = usuario;
      return true;
    }

    return false;
  }

  logout() {
    this.usuarioActual = null;
  }

  esChef(): boolean {
    return this.usuarioActual?.role === 'chef';
  }
}
