import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plato } from '../interfaces/plato';
import { CategoriaPipe } from '../pipes/categoria-pipe';
import { OrdenPrecioPipe } from '../pipes/orden-precio-pipe';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoriaPipe, OrdenPrecioPipe],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.css']
})
export class Gestion {

  categoriaSeleccionada = 'Todos';
  ordenSeleccionado = '';


  platos: Plato[] = [
    { id: 1, name: 'Ensalada César', description: 'Lechuga fresca, pollo, queso parmesano y croutons', price: 5.5, category: 'entrantes', enabled: true, image: 'Imagenes/ensalada.jpg' },
    { id: 2, name: 'Bruschetta', description: 'Pan tostado con tomate, ajo y albahaca', price: 4.0, category: 'entrantes', enabled: true, image: 'Imagenes/bruscheta.jpg' },
    { id: 3, name: 'Paella Valenciana', description: 'Arroz con mariscos y verduras frescas', price: 12.0, category: 'platos principales', enabled: true, image: 'Imagenes/paella.jpg' },
    { id: 4, name: 'Lasaña de carne', description: 'Capas de pasta con carne, salsa y queso gratinado', price: 10.5, category: 'platos principales', enabled: true, image: 'Imagenes/lasangaDeCarne.jpg' },
    { id: 5, name: 'Tarta de chocolate', description: 'Tarta casera con chocolate negro y crema', price: 4.5, category: 'postres', enabled: true, image: 'Imagenes/tarta.jpg' },
    { id: 6, name: 'Helado de Vainilla', description: 'Sabores variados, servido con frutas frescas', price: 3.5, category: 'postres', enabled: true, image: 'Imagenes/heladoVainilla.jpg' },
    { id: 7, name: 'Agua mineral', description: 'Botella de 500ml', price: 1.5, category: 'bebidas', enabled: true, image: 'Imagenes/aguaMineral.jpg' },
    { id: 8, name: 'Vino tinto', description: 'Copa de vino tinto reserva', price: 3.0, category: 'bebidas', enabled: true, image: 'Imagenes/vinoTinto1.jpg' },
  ];


  nuevoPlato: Plato = { id: 0, name: '', description: '', price: 0, category: '', enabled: true };


  cambiarEstado(plato: Plato) {
    plato.enabled = !plato.enabled;
  }


  eliminarPlato(plato: Plato) {
    this.platos = this.platos.filter(p => p.id !== plato.id);
  }


  crearPlato() {
    if (!this.nuevoPlato.name || !this.nuevoPlato.description || !this.nuevoPlato.category) return;

    const idMax = this.platos.length ? Math.max(...this.platos.map(p => p.id)) : 0;
    const plato: Plato = { ...this.nuevoPlato, id: idMax + 1, enabled: true };
    this.platos.push(plato);


    this.nuevoPlato = { id: 0, name: '', description: '', price: 0, category: '', enabled: true };
  }
}
