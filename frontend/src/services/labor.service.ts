import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Labor } from '../app/interfaces/labor';

@Injectable({
  providedIn: 'root'
})
export class LaborService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  obtenerlabor(): Observable<Labor[]> {
    return this.http.get<Labor[]>(`${this.apiUrl}/labores`);
  }

}