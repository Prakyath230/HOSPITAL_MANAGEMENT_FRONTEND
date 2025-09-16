import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medicine {
  medicineId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  qty?: number;
  expiryDate?: string;
  rating?: number;
}

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = '/api/medicines';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl);
  }

  getById(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/${id}`);
  }
}
