import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  filtroPorTag(consulta: { id_tag: number } ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrostag`,consulta);
  }

  filtroPorActivo(consulta: {id_activo: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/activosfiltros`,consulta);
  }

  filtroPorEdificio(consulta: {id_edificio: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrosedificio`,consulta);
  }

  filtroPorPiso(consulta: {id_piso: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrospiso`,consulta);
  }

  filtroPorSector(consulta: {id_sector: number} ): Observable<any> {
    return this.http.post(`${this.apiUrl}/filtrossector`,consulta);
  }
}
