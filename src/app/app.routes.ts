import { Routes } from '@angular/router';
import { Carta } from './carta/carta';
import { Inicio } from './inicio/inicio';
import { Gestion } from './gestion/gestion';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'home', component: Inicio, title: 'Pagina de bienvenida con informacion del restaurante' },
  { path: 'menu', component: Carta, title: 'Listado de platos con fotos y precio' },
  { path: 'admin', component: Gestion, title: 'Formulario para crear y editar platos ' },
  { path: 'login', component: Login, title: 'Formulario para iniciar sesion ' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];
