import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Labor } from '../app/interfaces/labor';

@Injectable({
  providedIn: 'root'
})
export class LaborService {
  private apiUrl = 'http://127.0.0.1:3307/API';
  private selectedLaborId = new BehaviorSubject<number | null>(null);
  selectedLaborId$ = this.selectedLaborId.asObservable();

  constructor(private http: HttpClient) {}

  obtenerlabor(): Observable<Labor[]> {
    return this.http.get<Labor[]>(`${this.apiUrl}/labores`);
  }

  setSelectedLabor(id_labor: number) {
    this.selectedLaborId.next(id_labor);
  }

  // getSelectedLaborId(): number | null {
  //   return this.selectedLaborId;
  // }
}

