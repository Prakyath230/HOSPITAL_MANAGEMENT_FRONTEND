import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointmentData = {
    patientName: '',
    age: '',
    sex: '',
    department: '',
    doctor: '',
    day: '',
    time: ''
  };

  departments = ['Cardiology','Neurology','Orthopedics','Pediatrics','General Medicine'];
  doctorsByDepartment: { [key: string]: string[] } = {
    Cardiology: ['Dr. Ayesha Khan','Dr. Rohit Sharma'],
    Neurology: ['Dr. Neha Desai','Dr. Anil Mehta'],
    Orthopedics: ['Dr. Raj Verma','Dr. Arjun Reddy'],
    Pediatrics: ['Dr. Meera Naik','Dr. Sneha Iyer'],
    'General Medicine': ['Dr. Karishma Kapoor','Dr. Vi Sethi']
  };
  availableDoctors: string[] = [];
  days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  times = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];

  bookingConfirmed = false;

  onDepartmentChange() {
    this.availableDoctors = this.doctorsByDepartment[this.appointmentData.department] || [];
    this.appointmentData.doctor = '';
  }

  bookAppointment() {
  const { patientName, age, sex, department, doctor, day, time } = this.appointmentData;

  if (!patientName || !age || !sex || !department || !doctor || !day || !time) {
    alert('Please fill all the fields before booking the appointment.');
    return;
  }
  this.bookingConfirmed = true;
}


  resetForm() {
    this.appointmentData = { patientName: '', age: '', sex: '', department: '', doctor: '', day: '', time: '' };
    this.availableDoctors = [];
    this.bookingConfirmed = false;
  }
}
