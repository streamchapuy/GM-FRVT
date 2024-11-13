import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
  usuarios: any = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;
  seleccionarUsuario: any;

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  volver(){
    this.router.navigate(['/home-logged']);
  }


  obtenerUsuarios(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  get paginadoSectores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.usuarios.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.usuarios.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
