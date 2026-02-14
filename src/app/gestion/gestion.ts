import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plato } from '../interfaces/plato';
import { CategoriaPipe } from '../pipes/categoria-pipe';
import { OrdenPrecioPipe } from '../pipes/orden-precio-pipe';
import { PlatosService } from '../services/platos.service';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoriaPipe, OrdenPrecioPipe],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.css']
})
export class Gestion {
  categoriaSeleccionada: string = 'Todos';
ordenSeleccionado: string = '';


  constructor(private platosService: PlatosService) {}

  platos: any[] = [];

ngOnInit() {
  this.platos = this.platosService.getPlatos();
}

toggleEstado(id: number) {
  this.platosService.toggleEstado(id);
}

eliminar(id: number) {
  this.platosService.eliminarPlato(id);
}









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
