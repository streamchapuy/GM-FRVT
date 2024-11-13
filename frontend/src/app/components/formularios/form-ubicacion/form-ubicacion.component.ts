import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../../../services/ubicacion.service';
import { Ubicacion } from '../../../interfaces/ubicacion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-ubicacion',
  templateUrl: './form-ubicacion.component.html',
  styleUrls: ['./form-ubicacion.component.css']
})
export class FormUbicacionComponent implements OnInit {
  ubicacion: Ubicacion = { id_ubicacion: 0, nombre: '', existencia: "" };
  existencias = [
    { id:1, nombre: 'Si' },
    {id: 0, nombre: 'No' }
  ];
  ubicaciones: Ubicacion[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;

  constructor(private ubicacionService: UbicacionService, private router: Router) {}

  ngOnInit(): void {
    this.cargarUbicaciones();
  }

  volver(){
    this.router.navigate(['/home-logged']);
  }

 cargarUbicaciones(): void {
  this.ubicacionService.obtenerUbicacion().subscribe((data: Ubicacion[]) => {
    this.ubicaciones = data;
  });
}

get paginadoSectores() {
  const start = this.currentPage * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  return this.ubicaciones.slice(start, end);
}

nextPage(): void {
  if (this.currentPage < Math.ceil(this.ubicaciones.length / this.itemsPerPage) - 1) {
    this.currentPage++;
  }
}

prevPage(): void {
  if (this.currentPage > 0) {
    this.currentPage--;
  }
}


  crear(): void {
    this.ubicacionService.crearUbicacion(this.ubicacion).subscribe(() => {
      this.cargarUbicaciones();
      this.limpiarFormulario();
    });
  }

  editar(): void {
    this.ubicacionService.editarUbicacion(this.ubicacion.id_ubicacion, this.ubicacion).subscribe(() => {
      this.limpiarFormulario();
      this.cargarUbicaciones();
    });
  }

  eliminar(): void {
    this.ubicacionService.eliminarUbicacion(this.ubicacion.id_ubicacion).subscribe(() => {
      this.limpiarFormulario();
      this.cargarUbicaciones();
    });
  }

  seleccionarUbicacion(ubicacion: Ubicacion): void {
    this.ubicacion = { ...ubicacion };
  }

  limpiarFormulario(): void {
    this.ubicacion = { id_ubicacion: 0, nombre: '', existencia: "" };
  }
}

