import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PlatosService {

 private platos = [
     { id: 1, name: 'Ensalada César', description: 'Lechuga fresca, pollo, queso parmesano y croutons', price: 5.5, category: 'entrantes', enabled: true, image: 'Imagenes/ensalada.jpg' },
     { id: 2, name: 'Bruschetta', description: 'Pan tostado con tomate, ajo y albahaca', price: 4.0, category: 'entrantes', enabled: true, image: 'Imagenes/bruscheta.jpg' },
     { id: 3, name: 'Paella Valenciana', description: 'Arroz con mariscos y verduras frescas', price: 12.0, category: 'platos principales', enabled: true, image: 'Imagenes/paella.jpg' },
     { id: 4, name: 'Lasaña de carne', description: 'Capas de pasta con carne, salsa y queso gratinado', price: 10.5, category: 'platos principales', enabled: true, image: 'Imagenes/lasangaDeCarne.jpg' },
     { id: 5, name: 'Tarta de chocolate', description: 'Tarta casera con chocolate negro y crema', price: 4.5, category: 'postres', enabled: true, image: 'Imagenes/tarta.jpg' },
     { id: 6, name: 'Helado de Vainilla', description: 'Sabores variados, servido con frutas frescas', price: 3.5, category: 'postres', enabled: true, image: 'Imagenes/heladoVainilla.jpg' },
     { id: 7, name: 'Agua mineral', description: 'Botella de 500ml', price: 1.5, category: 'bebidas', enabled: true, image: 'Imagenes/aguaMineral.jpg' },
     { id: 8, name: 'Vino tinto', description: 'Copa de vino tinto reserva', price: 3.0, category: 'bebidas', enabled: true, image: 'Imagenes/vinoTinto1.jpg' },
   ];

  getPlatos() {
    return this.platos;
  }

  toggleEstado(id: number) {
    const plato = this.platos.find(p => p.id === id);
    if (plato) {
      plato.enabled = !plato.enabled;
    }
  }

  eliminarPlato(id: number) {
  const index = this.platos.findIndex(p => p.id === id);
  if (index !== -1) {
    this.platos.splice(index, 1);
  }
}


  crearPlato(plato: any) {
    this.platos.push(plato);
  }
}
