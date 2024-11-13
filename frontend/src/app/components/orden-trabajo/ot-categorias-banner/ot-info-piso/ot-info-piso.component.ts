import { Component, OnInit } from '@angular/core';
import { PisoService } from '../../../../../services/piso.service';
import { Piso } from '../../../../interfaces/piso';
import { FiltrosService } from '../../../../../services/filtros.service';
import { FiltroInterfas } from '../../../../interfaces/filtros-interfas';

@Component({
  selector: 'app-ot-info-piso',
  templateUrl: './ot-info-piso.component.html',
  styleUrl: './ot-info-piso.component.css'
})
export class OtInfoPisoComponent implements OnInit{
  pisos: Piso[] = [];
  Pisos: FiltroInterfas[] = [];
  selectorPiso: number | null = null;
  constructor(private pisoService: PisoService, private filtrosService: FiltrosService) { }

  ngOnInit(): void {
    this.loadPisos();
    this.loadFilters();
  }
  loadPisos() {
    this.pisoService.obtenerPisos().subscribe({
      next: (data: Piso[]) => {
        this.pisos = data;
        console.log(this.pisos);
      },
      error: (err) => {
        console.error('Error al cargar los pisos:', err);
      }
    });
  }
  loadFilters() {
    this.filtrosService.filtroPorPiso({
      id_piso: 0
    }).subscribe({
      next: (data) => this.Pisos = data,
      error: (err) => console.error('Error al filtrar los pisos:', err)
    });
  }
}