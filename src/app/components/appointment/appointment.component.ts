import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  appointmentData: {
    patientName: string;
    age: number | null;
    sex: string;
    department: string;
    doctorId: number | null;
    day: string;
    time: string;
  } = {
    patientName: '',
    age: null,
    sex: '',
    department: '',
    doctorId: null,
    day: '',
    time: ''
  };

  departments: string[] = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'General Medicine'
  ];

  doctorsByDepartment: { [key: string]: { id: number; name: string }[] } = {
    Cardiology: [
      { id: 1, name: 'Dr. Ayesha Khan' },
      { id: 2, name: 'Dr. Rohit Sharma' }
    ],
    Neurology: [
      { id: 3, name: 'Dr. Neha Desai' },
      { id: 4, name: 'Dr. Anil Mehta' }
    ],
    Orthopedics: [
      { id: 5, name: 'Dr. Raj Verma' },
      { id: 6, name: 'Dr. Arjun Reddy' }
    ],
    Pediatrics: [
      { id: 7, name: 'Dr. Meera Naik' },
      { id: 8, name: 'Dr. Sneha Iyer' }
    ],
    'General Medicine': [
      { id: 9, name: 'Dr. Karishma Kapoor' },
      { id: 10, name: 'Dr. Vidhya Sethi' }
    ]
  };

  availableDoctors: { id: number; name: string }[] = [];

  days: string[] = [
    'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
  ];

  times: string[] = [
    '08:00','09:00','10:00','11:00',
    '12:00','13:00','14:00','15:00'
  ];

  bookingConfirmed = false;
  message = '';

  constructor(private appointmentService: AppointmentService) {}

  onDepartmentChange(): void {
    this.availableDoctors = this.doctorsByDepartment[this.appointmentData.department] || [];
    this.appointmentData.doctorId = null;
  }

  bookAppointment(): void {
    const { patientName, age, sex, department, doctorId, day, time } = this.appointmentData;
    if (!patientName || !age || !sex || !department || !doctorId || !day || !time) {
      alert('Please fill all fields');
      return;
    }

    const req = {
      patientName,
      age,
      sex,
      department,
      doctorId,
      day,
      time
    };

    this.appointmentService.bookAppointment(req).subscribe({
      next: (res: any) => {
        this.bookingConfirmed = true;
        this.message = res.message || 'Appointment booked successfully';
      },
      error: (err: any) => {
        this.bookingConfirmed = false;
        this.message = err.error?.message || 'Booking failed';
      }
    });
  }

  resetForm(): void {
    this.appointmentData = {
      patientName: '',
      age: null,
      sex: '',
      department: '',
      doctorId: null,
      day: '',
      time: ''
    };
    this.availableDoctors = [];
    this.bookingConfirmed = false;
    this.message = '';
  }
}
