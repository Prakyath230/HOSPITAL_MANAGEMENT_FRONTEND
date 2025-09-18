import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentService } from '../services/appointments.service';

@Component({
  selector: 'app-admin-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private adminService: AppointmentService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.adminService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  approve(id: number) {
  this.adminService.approveAppointment(id).subscribe(() => {
    this.loadAppointments();
  });
}

reject(id: number) {
  this.adminService.rejectAppointment(id).subscribe(() => {
    this.loadAppointments();
  });
}
}