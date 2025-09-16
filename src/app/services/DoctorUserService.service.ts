import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorUserService {

  private baseUrl = '/api/doctors';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
