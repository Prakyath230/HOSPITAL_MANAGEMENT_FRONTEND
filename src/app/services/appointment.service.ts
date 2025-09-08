import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Appointment {
  id: number;
  fullName: string;
  age: number;
  sex: string;
  department: string;
  doctor: string;
  day: string;
  time: string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private appointments: Appointment[] = [];
  private appointments$ = new BehaviorSubject<Appointment[]>([]);

  constructor() {
    const saved = localStorage.getItem('appointments');
    if (saved) {
      this.appointments = JSON.parse(saved);
      this.appointments$.next(this.appointments);
    }
  }

  getAppointments() {
    return this.appointments$.asObservable();
  }

  createAppointment(app: Appointment) {
    app.id = this.appointments.length ? Math.max(...this.appointments.map(a => a.id)) + 1 : 1;
    this.appointments.push(app);
    this.save();
  }

  updateAppointment(id: number, updated: Appointment) {
    const index = this.appointments.findIndex(a => a.id === id);
    if (index !== -1) {
      this.appointments[index] = { ...updated, id };
      this.save();
    }
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(a => a.id !== id);
    this.save();
  }

  private save() {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
    this.appointments$.next(this.appointments);
  }
}
