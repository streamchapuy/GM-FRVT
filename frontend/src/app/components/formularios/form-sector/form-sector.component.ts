import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../../../services/sector.service';
import { Sector } from '../../../interfaces/sector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-sector',
  templateUrl: './form-sector.component.html',
  styleUrls: ['./form-sector.component.css']
})
export class FormSectorComponent implements OnInit {
  sector: Sector = {
    id_sector: 0,
    nombre: '',
    existencia: "",
  };
  existencias = [
    { nombre: 'Si' },
    { nombre: 'No' }
  ];
  
  sectores: Sector[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;

  constructor(private sectorService: SectorService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerSectores();
  }

  obtenerSectores(): void {
    this.sectorService.obtenerSectores().subscribe(
      (data: Sector[]) => {
        this.sectores = data;
      },
      error => {
        console.error('Error al obtener sectores', error);
      }
    );
  }

  get paginatedSectores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.sectores.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.sectores.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  volver(){
    this.router.navigate(['/home-logged']);
  }


  crear(): void {
    this.sectorService.crearSector(this.sector).subscribe(
      (nuevoSector: Sector) => {
        this.sectores.push(nuevoSector);
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al crear sector', error);
      }
    );
  }

  editar(): void {
    this.sectorService.editarSector(this.sector.id_sector, this.sector).subscribe(
      () => {
        const index = this.sectores.findIndex(s => s.id_sector === this.sector.id_sector);
        if (index !== -1) {
          this.sectores[index] = this.sector;
        }
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al editar sector', error);
      }
    );
  }

  eliminar(): void {
    this.sectorService.eliminarSector(this.sector.id_sector).subscribe(
      () => {
        this.sectores = this.sectores.filter(s => s.id_sector !== this.sector.id_sector);
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al eliminar sector', error);
      }
    );
  }

  seleccionarSector(sector: Sector): void {
    this.sector = { ...sector };
  }

  limpiarFormulario(): void {
    this.sector = {
      id_sector: 0,
      nombre: '',
      existencia: "",
    };
  }
}
