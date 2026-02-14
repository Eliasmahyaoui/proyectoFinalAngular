import { Pipe, PipeTransform } from '@angular/core';
import { Plato } from '../interfaces/plato';

@Pipe({ name: 'categoria', standalone: true })
export class CategoriaPipe implements PipeTransform {
  transform(platos: Plato[], categoria: string): Plato[] {
    if (!categoria || categoria === 'Todos') return platos;
    return platos.filter(p => p.category === categoria);
  }
}
