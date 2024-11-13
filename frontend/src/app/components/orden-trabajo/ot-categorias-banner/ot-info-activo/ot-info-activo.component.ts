import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../../../services/activo.service';
import { Activo } from '../../../../interfaces/activo';
import { SelectionService } from '../../../../../services/selection.service';
import { FiltrosService } from '../../../../../services/filtros.service';
import { FiltroInterfas } from '../../../../interfaces/filtros-interfas';

@Component({
  selector: 'app-ot-info-activo',
  templateUrl: './ot-info-activo.component.html',
  styleUrls: ['./ot-info-activo.component.css']
})
export class OtInfoActivoComponent implements OnInit {
  activos: Activo[] = [];
  Activos: FiltroInterfas[] = [];
  selectorActivo: number | null = null;

  constructor(
    private activoService: ActivoService, 
    private selectionService: SelectionService, 
    private filtrosService: FiltrosService
  ) {}

  onActivoSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Haciendo casting
    const id = Number(selectElement.value); 
    this.activoService.setSelectedActivo(id);
    this.selectionService.setActivo(id);
  }

  ngOnInit(): void {
    // Cargar los activos
    this.loadActivos();
    // Cargar los filtros por activo
    this.loadFilters();
  }

  loadActivos() {
    this.activoService.obtenerActivos().subscribe(
      (data: Activo[]) => {
        this.activos = data;
      },
      error => {
        console.error('Error al obtener activos:', error);
      }
    );
  }

  loadFilters() {
    this.filtrosService.filtroPorActivo({
      id_activo: 0
    }).subscribe({
      next: (data) => this.Activos = data,
      error: (err) => console.error('Error al filtrar los activos:', err)
    });
  }

  setActivo($event: any) {
    this.activoService.setSelectedActivo($event.target.value);
  }
}
