import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl: string = '/api/appointments';

  constructor(private http: HttpClient) {}

  bookAppointment(req:any): Observable<any> {
    return this.http.post(this.baseUrl, req);
  }

  getMyAppointment(): Observable<any> {
    return this.http.get(this.baseUrl + '/details');
  }

  getAllAppointments(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  approveAppointment(id:number): Observable<any> {
    return this.http.put(this.baseUrl + '/approve/' + id, {});
  }

  rejectAppointment(id:number): Observable<any> {
    return this.http.put(this.baseUrl + '/reject/' + id, {});
  }
}
