import { Component, OnInit } from '@angular/core';
import { CodigoService } from '../../../../../services/codigo.service';
import { CodigoActivo } from '../../../../interfaces/codigo-activo';
import { FiltrosService } from '../../../../../services/filtros.service';
import { FiltroInterfas } from '../../../../interfaces/filtros-interfas';

@Component({
  selector: 'app-ot-info-codigo',
  templateUrl: './ot-info-codigo.component.html',
  styleUrls: ['./ot-info-codigo.component.css']
})
export class OtInfoCodigoComponent implements OnInit {
  CodigoActivo: CodigoActivo[] = [];
  Codigoactivo: FiltroInterfas[] = [];
  selectorcodigo: number | null = null;

  constructor(private CodigoService: CodigoService, private filtrosService: FiltrosService) { }

  ngOnInit(): void {
    // Cargar los datos de CodigoActivo
    this.loadOts();
    // Cargar los filtros por tag
    this.loadFilters();
  }

  loadOts() {
    this.CodigoService.obtenerCodigoActivo().subscribe({
      next: (data: CodigoActivo[]) => {
        this.CodigoActivo = data;
        console.log(this.CodigoActivo);
      },
      error: (err) => {
        console.error('Error al cargar los códigos activos:', err);
      }
    });
  }

  loadFilters() {
    this.filtrosService.filtroPorTag({
      id_tag: 0
    }).subscribe({
      next: (data) => {
        this.Codigoactivo = data;
      },
      error: (err) => {
        console.error('Error al filtrar los tags:', err);
      }
    });
  }
}

