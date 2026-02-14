import { Pipe, PipeTransform } from '@angular/core';
import { Plato } from '../interfaces/plato';

@Pipe({ name: 'ordenPrecio', standalone: true })
export class OrdenPrecioPipe implements PipeTransform {
  transform(platos: Plato[], orden: string): Plato[] {
    if (!orden) return platos;
    if (orden === 'asc') return [...platos].sort((a,b) => a.price - b.price);
    if (orden === 'desc') return [...platos].sort((a,b) => b.price - a.price);
    return platos;
  }
}
