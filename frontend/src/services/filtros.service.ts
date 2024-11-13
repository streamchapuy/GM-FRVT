import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FiltroInterfas } from '../app/interfaces/filtros-interfas';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  // Filtro por Tag
  filtroPorTag(consulta: { id_tag: number } ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrostag`,consulta);
  }

  // Filtro por Activo
  filtroPorActivo(consulta: {id_activo: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/activosfiltros`,consulta);
  }

  // Filtro por Edificio
  filtroPorEdificio(consulta: {id_edificio: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrosedificio`,consulta);
  }

  // Filtro por Piso
  filtroPorPiso(consulta: {id_piso: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrospiso`,consulta);
  }

  // Filtro por Sector
  filtroPorSector(consulta: {id_sector: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrossector`,consulta);
  }
}
