import { Component, OnInit } from '@angular/core';
import { NumeroOTService } from '../../../../../services/numero-ot.service';
import { NumeroOT } from '../../../../interfaces/numero-ot';


@Component({
  selector: 'app-ot-info-n',
  templateUrl: './ot-info-n.component.html',
  styleUrl: './ot-info-n.component.css'
})
export class OtInfoNComponent implements OnInit {
  ots: NumeroOT[] = [];  // Lista de órdenes de trabajo
  selectorOT: NumeroOT | undefined;  // OT seleccionada

  constructor(private numeroOTService: NumeroOTService) {}

  ngOnInit(): void {
    this.getOrdenesTrabajo();  // Cargar las OT cuando el componente se inicie
  }

  getOrdenesTrabajo(): void {
    this.numeroOTService.obtenerNumeroOT().subscribe(
      (data: NumeroOT[]) => {
        this.ots = data; // Asigna las órdenes de trabajo a la variable 'ots'
      },
      (error) => {
        console.error('Error al obtener las OT:', error);
      }
    );
  }

  // Método que se puede llamar cuando se seleccione una OT (si es necesario)
  onSelectOT(): void {
    if (this.selectorOT) {
      console.log('OT seleccionada:', this.selectorOT);
    }
  }
}


