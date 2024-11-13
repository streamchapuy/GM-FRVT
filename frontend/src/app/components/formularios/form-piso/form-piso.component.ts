import { Component, OnInit } from '@angular/core';
import { PisoService } from '../../../../services/piso.service';
import { Piso } from '../../../interfaces/piso';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-piso',
  templateUrl: './form-piso.component.html',
  styleUrls: ['./form-piso.component.css']
})
export class FormPisoComponent implements OnInit {
  piso: Piso = {
    id_piso: 0,
    nombre: '',
    existencia: ""
  };
  existencias = [
    {  nombre: 'Si' },
    {  nombre: 'No' }
  ];
  
  pisos: Piso[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;

  constructor(private pisoService: PisoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPisos();
  }

  volver(){
    this.router.navigate(['/home-logged']);
  }

  cargarPisos(): void {
    this.pisoService.obtenerPisos().subscribe((data: Piso[]) => {
      this.pisos = data;
    });
  }

  get paginadoSectores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.pisos.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.pisos.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  crear(): void {
    this.pisoService.crearPiso(this.piso).subscribe(() => {
      this.cargarPisos();
      this.limpiarFormulario();
    });
  }

  editar(): void {
    this.pisoService.editarPiso(this.piso).subscribe(() => {
      this.cargarPisos();
      this.limpiarFormulario();
    });
  }

  eliminar(): void {
    this.pisoService.eliminarPiso(this.piso.id_piso).subscribe(() => {
      this.cargarPisos();
      this.limpiarFormulario();
    });
  }

  seleccionarPiso(piso: Piso): void {
    this.piso = { ...piso };
  }

  limpiarFormulario(): void {
    this.piso = {
      id_piso: 0,
      nombre: '',
      existencia: ""
    };
  }
}
