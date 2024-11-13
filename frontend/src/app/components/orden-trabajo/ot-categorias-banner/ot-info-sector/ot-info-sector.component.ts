import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../../../../services/sector.service';
import { Sector } from '../../../../interfaces/sector';
import { FiltrosService } from '../../../../../services/filtros.service';
import { FiltroInterfas } from '../../../../interfaces/filtros-interfas';

@Component({
  selector: 'app-ot-info-sector',
  templateUrl: './ot-info-sector.component.html',
  styleUrls: ['./ot-info-sector.component.css']
})
export class OtInfoSectorComponent implements OnInit {
showOptions: any;
selectOption(_t14: Sector) {
throw new Error('Method not implemented.');
}
  sectores: Sector[] = [];
  Sectores: FiltroInterfas[] = [];
  filteredSectores: Sector[] = [];
  selectorSector: number | null = null;
  searchText: string = '';

  constructor(private sectorService: SectorService, private filtrosService: FiltrosService) {}

  ngOnInit(): void {
    this.loadSectores();
    this.loadFilters();
  }

  loadSectores() {
    this.sectorService.obtenerSectores().subscribe({
      next: (data: Sector[]) => {
        this.sectores = data;
        this.filteredSectores = data;
        console.log(this.sectores);
      },
      error: (err) => {
        console.error('Error al cargar los sectores:', err);
      }
    });
  }

  filterOptions() {
    const search = this.searchText.toLowerCase();
    this.filteredSectores = this.sectores.filter(sector =>
      sector.nombre.toLowerCase().includes(search)
    );
  }
  loadFilters() {
    this.filtrosService.filtroPorSector({
      id_sector: 0
    }).subscribe({
      next: (data) => this.Sectores = data,
      error: (err) => console.error('Error al filtrar los sectores:', err)
    });
  }
}
