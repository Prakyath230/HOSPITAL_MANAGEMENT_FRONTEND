import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Appointment {
  appointmentId: number;
  patientName: string;
  age: number;
  sex: string;
  department: string;
  day: string;
  time: string;
  appointmentStatus: string;
  doctorName: string;
}


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/api/appointments'; 

  constructor(private http: HttpClient) {}

  approveAppointment(id: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/approve/${id}`, {}, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
}

rejectAppointment(id: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/reject/${id}`, {}, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
}

getAllAppointments(): Observable<Appointment[]> {
  return this.http.get<Appointment[]>(this.apiUrl, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
}
}