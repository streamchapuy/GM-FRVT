import { Component, HostListener, OnInit } from '@angular/core';
// import { OtService } from '../../../services/ot.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent {
  // ordenesPendientes: any[] = [];
  // ordenSeleccionada: any = null;

  // constructor(private otService: OtService) {}

  // ngOnInit(): void {
  //   this.obtenerOrdenesPendientes();
  // }

  // obtenerOrdenesPendientes(): void {
  //   this.otService.obtenerOt().subscribe(
  //     (data) => {
  //       const ordenes = data.filter((orden: any) => orden.estado === 'pendiente');
  //       if (ordenes.length === 0) {
  //         this.ordenesPendientes = this.obtenerOrdenesEjemplo();
  //       } else {
  //         this.ordenesPendientes = ordenes;
  //       }
  //     },
  //     (error) => {
  //       console.error('Error al obtener las órdenes de trabajo pendientes', error);
  //       this.ordenesPendientes = this.obtenerOrdenesEjemplo();
  //     }
  //   );
  // }

  obtenerOrdenesEjemplo(): any[] {
    return [
      {
        id_ot: 1,
        descripcion: 'Reparación de sistema hidráulico',
        nombre_operario: 'Juan Pérez',
        estado_orden: 'Pendiente',
        fecha_creacion: new Date(),
        fecha_finalizacion: new Date(),
        tiempo_inicio: '08:00',
        tiempo_finalizacion: '12:00'
      },
      {
        id_ot: 2,
        descripcion: 'Mantenimiento de ascensores',
        nombre_operario: 'María López',
        estado_orden: 'En proceso',
        fecha_creacion: new Date(),
        fecha_finalizacion: new Date(),
        tiempo_inicio: '09:00',
        tiempo_finalizacion: '15:00'
      }
    ];
  }

  // seleccionarOrden(orden: any): void {
  //   this.ordenSeleccionada = orden;
  // }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: Event): void {
  //   const targetElement = event.target as HTMLElement;
  //   if (!targetElement.closest('.orden-card')) {
  //     this.ordenSeleccionada = null;
  //   }
  // }

  redirigirAOrden(): void{
    console.log();
  }
}
