import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common'; // IMPORTAR

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, CommonModule], // AÑADIDO CommonModule
  template: `
    <app-navbar></app-navbar>

    <!-- BOTÓN FLOTANTE -->
    <button class="access-btn" (click)="toggleMenu()">
      ♿
    </button>

    <!-- PANEL -->
    <div class="usability-widget" *ngIf="menuAbierto">
  <h4>Accesibilidad</h4>

  <button (click)="toggleTextoGrande()">Aumentar texto</button>
  <button (click)="toggleInterlineado()">Interlineado</button>

  <button (click)="toggleContraste()">Alto contraste</button>
  <button (click)="toggleGrises()">Escala grises</button>

  <button (click)="toggleEnfoque()">Enfoque contorno</button>
  <button (click)="toggleAnimaciones()">Pausar animaciones</button>
</div>


    <router-outlet></router-outlet>
  `
})
export class App {
  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    console.log('toggleMenu', this.menuAbierto);
  }

  toggleTextoGrande() {
    document.body.classList.toggle('texto-grande');
  }

  toggleInterlineado() {
    document.body.classList.toggle('interlineado');
  }

  toggleContraste() {
    document.body.classList.toggle('contraste-alto');
  }

  toggleGrises() {
    document.body.classList.toggle('grises');
  }

  toggleEnfoque() {
    document.body.classList.toggle('enfoque');
  }

  toggleAnimaciones() {
  document.body.classList.toggle('sin-animaciones');
}

}
