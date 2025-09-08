import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-user.component.html',
  styleUrls: ['./doctor-user.component.css']
})
export class DoctorUserComponent {
  searchTerm: string = '';

  doctors = [
  {
    name: 'Dr. Ayesha Khan',
    specialty: 'Cardiologist',
    email: 'ayesha@example.com',
    experience: '10 yrs',
    feedback: 'Very caring.',
    image: 'https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Dr. Raj Verma',
    specialty: 'Orthopedic',
    email: 'raj@example.com',
    experience: '12 yrs',
    feedback: 'Clear guidance.',
    image: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.webp?s=2048x2048&w=is&k=20&c=XPrBnWXPZ6APj1L9r768W1TWpZl4s3T9mMzwmPDGp4s='
  },
  {
    name: 'Dr. Neha Desai',
    specialty: 'Neurologist',
    email: 'neha@example.com',
    experience: '8 yrs',
    feedback: 'Friendly.',
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Dr. Arjun Reddy',
    specialty: 'Dermatologist',
    email: 'arjun@example.com',
    experience: '9 yrs',
    feedback: 'Professional.',
    image: 'https://media.istockphoto.com/id/1056210564/photo/portrait-of-indian-doctor.webp?s=2048x2048&w=is&k=20&c=F6M1i-hVqI8MxwZtZtq70zNcezST8x4R0oqly-v2fnI='
  },
  {
    name: 'Dr. Sneha Iyer',
    specialty: 'ENT',
    email: 'sneha@example.com',
    experience: '7 yrs',
    feedback: 'Attentive.',
    image: 'https://media.istockphoto.com/id/1292859438/photo/portrait-female-doctor-stock-photo.webp?s=2048x2048&w=is&k=20&c=SyqOjPgvFuju4bG3BI5fg4AI0aWrRHdrcWGfK0NVVmE='
  },
  {
    name: 'Dr. Karishma Kapoor',
    specialty: 'Physician',
    email: 'karishma@example.com',
    experience: '15 yrs',
    feedback: 'Helpful.',
    image: 'https://images.unsplash.com/photo-1683348858658-7c6b0eff2a16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Dr. Meera Naik',
    specialty: 'Pediatrician',
    email: 'meera@example.com',
    experience: '10 yrs',
    feedback: 'Friendly.',
    image: 'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?s=2048x2048&w=is&k=20&c=8soF-2Xu5163wiMffFjyyAF3TVTtT5yiDacKx97TSyw='
  },
  {
    name: 'Dr. Rohini Malhotra',
    specialty: 'Psychiatrist',
    email: 'rohini@example.com',
    experience: '8 yrs',
    feedback: 'Very Caring.',
    image: 'https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.webp?s=2048x2048&w=is&k=20&c=BLoZsEopjCiEvwmyyy7LZqrRkrB7nvvhwzJsN5bZc9Y='
  },
  {
    name: 'Dr. Anjali Joshi',
    specialty: 'Gynecologist',
    email: 'anjali@example.com',
    experience: '11 yrs',
    feedback: 'Excellent.',
    image: 'https://media.istockphoto.com/id/1367507209/photo/portrait-of-indian-female-doctor-stock-photo.webp?s=2048x2048&w=is&k=20&c=2pWNhHrCO--osTC9IuS9Pv6Ba7DiQVcZMdyqgHpdni4='
  },
  {
    name: 'Dr. Vinod Sethi',
    specialty: 'Urologist',
    email: 'vi@example.com',
    experience: '9 yrs',
    feedback: 'Reliable.',
    image: 'https://media.istockphoto.com/id/672332612/photo/studio-shot-of-young-handsome-indian-man-doctor-wearing-eyeglasses-against-white-background.webp?s=2048x2048&w=is&k=20&c=pvM8JFwheY6YLmTMpivWwLi0RFo6rOlOH0U25VvO68k='
  },
  {
    name: 'Dr. Priya Dutta',
    specialty: 'Oncologist',
    email: 'priya@example.com',
    experience: '12 yrs',
    feedback: 'Compassionate.',
    image: 'https://media.istockphoto.com/id/671290874/photo/portrait-of-a-female-doctor.webp?s=2048x2048&w=is&k=20&c=fumRIOcm6mfqGPhoiYE7kiHiWgXWrCkrocMpSZDQbNE='
  },
  {
    name: 'Dr. Manish Rawat',
    specialty: 'Pulmonologist',
    email: 'manish@example.com',
    experience: '10 yrs',
    feedback: 'Helpful.',
    image: 'https://media.istockphoto.com/id/1080237358/photo/indian-male-doctor-on-blue-background-stock-image.webp?s=2048x2048&w=is&k=20&c=MEfYAOvKBW66OlYvyWKuErVqjSN3EovcmbfG5k9Fh5o='
  }
];


  get filteredDoctors() {
    if (!this.searchTerm.trim()) return this.doctors;
    const term = this.searchTerm.toLowerCase();
    return this.doctors.filter(d =>
      d.name.toLowerCase().includes(term) || d.specialty.toLowerCase().includes(term)
    );
  }
}
