import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../../services/tareas.service';
import { Tarea } from '../../../interfaces/tarea';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-tareas',
  templateUrl: './form-tareas.component.html',
  styleUrls: ['./form-tareas.component.css']
})
export class FormTareasComponent implements OnInit {
  tarea: Tarea = {
    id_tarea: 0,
    descripcion: '',
    existencia: '',
  };

  existencias = [
    { id_existencia: 1, nombre: 'Sí' },
    { id_existencia: 0, nombre: 'No' }
  ];

  tareas: Tarea[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;

  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  volver(){
    this.router.navigate(['/home-logged']);
  }

  obtenerTareas(): void {
    this.tareaService.obtenerTareas().subscribe(
      (data: Tarea[]) => {
        this.tareas = data;
      },
      error => {
        console.error('Error al obtener tareas', error);
      }
    );
  }

  get paginadoSectores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.tareas.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.tareas.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }


  crear(): void {
    this.tareaService.crearTarea(this.tarea).subscribe(
      (nuevaTarea: Tarea) => {
        this.tareas.push(nuevaTarea);
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al crear tarea', error);
      }
    );
  }

  editar(): void {
    this.tareaService.editarTarea(this.tarea.id_tarea, this.tarea).subscribe(
      () => {
        const index = this.tareas.findIndex(t => t.id_tarea === this.tarea.id_tarea);
        if (index !== -1) {
          this.tareas[index] = this.tarea;
        }
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al editar tarea', error);
      }
    );
  }

  eliminar(): void {
    this.tareaService.eliminarTarea(this.tarea.id_tarea).subscribe(
      () => {
        this.tareas = this.tareas.filter(t => t.id_tarea !== this.tarea.id_tarea);
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al eliminar tarea', error);
      }
    );
  }

  seleccionarTarea(tarea: Tarea): void {
    this.tarea = { ...tarea };
  }

  limpiarFormulario(): void {
    this.tarea = {
      id_tarea: 0,
      descripcion: '',
      existencia: ''
    };
  }
}

