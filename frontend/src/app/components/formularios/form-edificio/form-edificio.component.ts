import { Component, OnInit } from '@angular/core';
import { EdificioService } from '../../../../services/edificio.service';
import { Edificio } from '../../../interfaces/edificio';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-edificio',
  templateUrl: './form-edificio.component.html',
  styleUrls: ['./form-edificio.component.css']
})
export class FormEdificioComponent implements OnInit {
  edificio: Edificio = {
    id_edificio: 0,
    nombre: '',
    calle: '',
    existencia: ""
  };

  existencias = [
    { nombre: 'Si' },
    { nombre: 'No' }
  ];

  edificios: Edificio[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;

  constructor(private edificioService: EdificioService, private router: Router) { }

  ngOnInit() {
    this.obtenerEdificios();
  }
  
  volver(){
    this.router.navigate(['/home-logged']);
  }
  obtenerEdificios() {
    this.edificioService.obtenerEdificio().subscribe((data: Edificio[]) => {
      this.edificios = data;
    });
  }


  get paginadoSectores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.edificios.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.edificios.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  seleccionarEdificio(edificio: Edificio) {
    this.edificio = { ...edificio };
  }

  crear() {
console.log('Objeto edificio:', this.edificio);
    this.edificioService.guardarEdificio(this.edificio).subscribe({
      next: (nuevoEdificio: Edificio) => {
        this.edificios.push(nuevoEdificio);
        // this.limpiarFormulario();
console.log('Edificio creado:', nuevoEdificio);
      },
      error: (err) => console.error('Error al crear edificio:', err)
    });
  }

  editar() {
    this.edificioService.editarEdificio(this.edificio.id_edificio, this.edificio).subscribe(() => {
      this.obtenerEdificios();
      this.limpiarFormulario();
    });
  }

  eliminar() {
    if (this.edificio.id_edificio) {
      this.edificioService.eliminarEdificio(this.edificio.id_edificio).subscribe(() => {
        this.obtenerEdificios();
        this.limpiarFormulario();
      });
    }
  }

  limpiarFormulario() {
    this.edificio = {
      id_edificio: 0,
      nombre: '',
      calle: '',
      existencia: ""
    };
  }
}

