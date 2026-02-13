import { Component } from '@angular/core';
import { Plato } from '../interfaces/plato';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgForOf } from '@angular/common';



@Component({
  imports: [],
  selector: 'app-carta',
  templateUrl: './carta.html',
  styleUrls: ['./carta.css']
})
export class Carta {

  platos: Plato[] = [
    {
      id: 1,
      name: 'Ensalada César',
      description: 'Ensalada fresca con pollo',
      price: 5.5,
      category: 'entrantes',
      enabled: true,
      image: 'assets/ensalada.jpg'
    },
    {
      id: 2,
      name: 'Paella',
      description: 'Paella tradicional',
      price: 12,
      category: 'platos principales',
      enabled: true,
      image: 'assets/paella.jpg'
    },
    {
      id: 3,
      name: 'Tarta de chocolate',
      description: 'Postre casero',
      price: 4,
      category: 'postres',
      enabled: true,
      image: 'assets/tarta.jpg'
    }
  ];


}
