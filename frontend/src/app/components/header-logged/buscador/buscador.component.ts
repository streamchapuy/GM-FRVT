import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Output() searchTerm = new EventEmitter<string>();
  searchValue: string = '';

  private searchMapping: { [key: string]: string } = {
    'orden de trabajo': '/ordenTrabajo',
    'ot': '/ordenTrabajo',
    'crear': '/ordenTrabajo',
    'generar': '/ordenTrabajo',
    'activo': '/formActivo',
    'activos': '/formActivo',
    'edificio': '/formEdificio',
    'edificios': '/formEdificio',
    'ots': '/formOT',
    'ordenes': '/formOT',
    'ordenes de trabajo': '/formOT',
    'piso': '/formPiso',
    'pisos': '/formPiso',
    'sector': '/formSector',
    'sectores': '/formSector',
    'ubicacion': '/formUbicacion',
    'ubicaciones': '/formUbicacion',
    'usuarios': '/formUsuarios',
    'usuario': '/formUsuarios',
    'tareas': '/formTareas',
    'tarea': '/formTareas',
    'home': '/home-logged',
    'adin': '/home-logged',
    'pendientes': '/home-operario',
    'ot pendientes': '/home-operario',
    'ordenes pendientes': '/home-operario',
    'ordenes de trabajo pendientes': '/home-operario',
    'pendiente': '/home-operario',
    'ot pendiente': '/home-operario',
    'orden pendiente': '/home-operario',
    'orden de trabajo pendiente': '/home-operario',
    'activas': '/home-operario',
    'ot activas': '/home-operario',
    'ordenes activas': '/home-operario',
    'ordenes de trabajo activas': '/home-operario',
    'activa': '/home-operario',
    'ot activa': '/home-operario',
    'orden activa': '/home-operario',
    'orden de trabajo activa': '/home-operario',
    'terminadas': '/home-operario',
    'ot terminadas': '/home-operario',
    'ordenes terminadas': '/home-operario',
    'ordenes de trabajo terminadas': '/home-operario',
    'terminada': '/home-operario',
    'ot terminada': '/home-operario',
    'orden terminada': '/home-operario',
    'orden de trabajo terminada': '/home-operario',
    'finalizadas': '/home-operario',
    'ot finalizadas': '/home-operario',
    'ordenes finalizadas': '/home-operario',
    'ordenes de trabajo finalizadas': '/home-operario',
    'finalizada': '/home-operario',
    'ot finalizada': '/home-operario',
    'orden finalizada': '/home-operario',
    'orden de trabajo finalizada': '/home-operario',
    'canceladas': '/home-operario',
    'ot canceladas': '/home-operario',
    'ordenes canceladas': '/home-operario',
    'ordenes de trabajo canceladas': '/home-operario',
    'cancelada': '/home-operario',
    'ot cancelada': '/home-operario',
    'orden cancelada': '/home-operario',
    'orden de trabajo cancelada': '/home-operario',
  };

  constructor(private router: Router) { }

  onSearch(): void {
    const searchValue = this.searchValue.toLowerCase().trim();

    for (const key in this.searchMapping) {
      if (searchValue.includes(key)) {
        this.router.navigate([this.searchMapping[key]]);
        return;
      }
    }

    this.router.navigate(['/404']);
  }
}
