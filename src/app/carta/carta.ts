import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaPipe } from "../pipes/categoria-pipe";
import { OrdenPrecioPipe } from "../pipes/orden-precio-pipe";
import { Plato } from '../interfaces/plato';
import { PlatosService } from '../services/platos.service';


@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, CategoriaPipe, OrdenPrecioPipe],
  templateUrl: './carta.html',
  styleUrls: ['./carta.css']
})
export class Carta {
  categoriaSeleccionada = 'Todos';
  ordenSeleccionado = '';

  constructor(private platosService: PlatosService) {}
  platos: any[] = [];

ngOnInit() {
  this.platos = this.platosService.getPlatos();
}


}

