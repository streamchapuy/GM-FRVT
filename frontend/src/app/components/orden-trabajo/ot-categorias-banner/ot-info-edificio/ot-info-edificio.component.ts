import { Component, OnInit } from '@angular/core';
import { EdificioService } from '../../../../../services/edificio.service';
import { Edificio } from '../../../../interfaces/edificio';
import { FiltrosService } from '../../../../../services/filtros.service';
import { FiltroInterfas } from '../../../../interfaces/filtros-interfas';

@Component({
  selector: 'app-ot-info-edificio',
  templateUrl: './ot-info-edificio.component.html',
  styleUrl: './ot-info-edificio.component.css'
})
export class OtInfoEdificioComponent implements OnInit{
  edificios: Edificio[] = [];
  Edificios: FiltroInterfas[] = [];
  selectorEdificio: number | null = null;
  constructor(private edificioService: EdificioService, private filtrosService: FiltrosService) { }

  ngOnInit(): void {
    this.loadEdificios();
    this.loadFilters();
  }
  loadEdificios() {
    this.edificioService.obtenerEdificio().subscribe({
      next: (data: Edificio[]) => {
        this.edificios = data;
        console.log(this.edificios);
      },
      error: (err) => {
        console.error('Error al cargar los edificios:', err);
      }
    });
  }
  loadFilters() {
    this.filtrosService.filtroPorEdificio({
      id_edificio: 0
    }).subscribe({
      next: (data) => this.Edificios = data,
      error: (err) => console.error('Error al filtrar los edificios:', err)
    });
  }
}
