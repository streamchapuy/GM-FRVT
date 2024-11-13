// src/app/services/orden-trabajo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumeroOT } from '../app/interfaces/numero-ot'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  private apiUrl = 'hthttp://127.0.0.1:3307/API'; 

  constructor(private http: HttpClient) { }

  
 createOrdenTrabajo(ordenTrabajo: NumeroOT): Observable<NumeroOT> {
  return this.http.post<NumeroOT>(`${this.apiUrl}/ordentrabajo`, ordenTrabajo);
}


  verOrdenesTrabajo(ordenesTrabajo: NumeroOT): Observable<NumeroOT> {
    return this.http.get<NumeroOT>(`${this.apiUrl}/ordenestrabajo`);
  }
}
