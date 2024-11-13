import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../../services/activo.service';
import { Activo } from '../../../interfaces/activo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-activo',
  templateUrl: './form-activo.component.html',
  styleUrls: ['./form-activo.component.css']
})
export class FormActivoComponent implements OnInit {
  activo: Activo = {
    id_activo: 0,
    nombre: '',
    abreviacion: '',
    existencia: ""
  };

  existencias = [
    {  nombre: 'Si' },
    {  nombre: 'No' }
  ];

  activos: Activo[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;

  constructor(private activoService: ActivoService, private router: Router) { }

  ngOnInit() {
    this.obtenerActivos();
  }

  volver(){
    this.router.navigate(['/home-logged']);
  }

  obtenerActivos() {
    this.activoService.obtenerActivos().subscribe((data: Activo[]) => {
      this.activos = data;
    });
  }

  get paginadoSectores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.activos.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.activos.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  seleccionarActivo(activo: Activo) {
    this.activo = { ...activo };
  }

  crear() {
    this.activoService.crearActivo(this.activo).subscribe({
      next: (nuevoActivo) => {
        this.activos.push(nuevoActivo);
        this.limpiarFormulario();
      },
      error: (err) => console.error('Error al crear activo:', err)
    });
  }

  editar() {
    this.activoService.editarActivo(this.activo).subscribe({
      next: () => {
        this.obtenerActivos();
        this.limpiarFormulario();
      },
      error: (err) => console.error('Error al editar activo:', err)
    });
  }

  eliminar() {
    if (this.activo.id_activo) {
      this.activoService.eliminarActivo(this.activo.id_activo).subscribe({
        next: () => {
          this.obtenerActivos();
          this.limpiarFormulario();
        },
        error: (err) => console.error('Error al eliminar activo:', err)
      });
    }
  }

  limpiarFormulario() {
    this.activo = {
      id_activo: 0,
      nombre: '',
      abreviacion: '',
      existencia: ""
    };
  }
}
