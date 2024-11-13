import { Component, OnInit } from '@angular/core';
import { NumeroOTService } from '../../../../services/numero-ot.service';
import { NumeroOT } from '../../../interfaces/numero-ot';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-ot',
  templateUrl: './form-ot.component.html',
  styleUrls: ['./form-ot.component.css']
})
export class FormOtComponent implements OnInit {
  ordenesTrabajo: NumeroOT[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;
  seleccionarOrden: any;

  constructor(private numeroOTService: NumeroOTService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerOt(); // Obtener órdenes de trabajo al iniciar
  }
  obtenerOt(): void {
    this.numeroOTService.obtenerNumeroOT().subscribe(
      (data: NumeroOT[]) => {
        this.ordenesTrabajo = data;
      },
      (error: any) => {
        console.error('Error al obtener las órdenes de trabajo', error);
      }
    );
  }

  get paginadoSectores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.ordenesTrabajo.slice(start, end);
  }
  
  nextPage(): void {
    if (this.currentPage < Math.ceil(this.ordenesTrabajo.length / this.itemsPerPage) - 1) {
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
}
