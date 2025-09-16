import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  hospitalName = 'MedCare Multispeciality Hospital';
  welcomeMessage = 'Your Health, Our Mission';

  announcements = [
    { text: 'Join our Free Health Check-up Camp this Sunday at 10 AM. Limited slots!' },
    { text: 'New Cardiology Wing opening next month. Book your consultation now.' },
    { text: 'Free mental health webinar this Friday at 6 PM.' }
  ];

  currentAnnouncementIndex = 0;
  currentAnnouncement = this.announcements[0];

  highlights = [
    {
      title: 'Online Appointment Booking',
      description: 'Schedule consultations anytime, anywhere with our easy portal.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjaxYuZiR68LCrakQeIN2xtH9YOOS-xr3nA&s',
       buttonText: 'Book Now'

    },
    {
      title: 'Expert Doctors',
      description: 'Consult top specialists in all departments.',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=300&q=80',
        buttonText: 'Meet Our Doctors'

    },
    {
      title: 'Advanced Diagnostics',
      description: 'Accurate reports with the latest technology.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37jPrrj9UZbDrENDt0FUri0EGHr5Fq_8qIA&s',
        buttonText: 'View Services'

    }
  ];

  email = '';

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    setTimeout(() => this.cdr.detectChanges(), 0);
  }

  nextAnnouncement() {
    this.currentAnnouncementIndex =
      (this.currentAnnouncementIndex + 1) % this.announcements.length;
    this.currentAnnouncement = this.announcements[this.currentAnnouncementIndex];
    this.cdr.detectChanges();
  }

  scrollToServices() {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  }

  learnMore(title: string) {
  if (title === 'Online Appointment Booking') {
    this.router.navigate(['/appointment']);
  } else if (title === 'Expert Doctors') {
    this.router.navigate(['/doctor-user']);
  } else if (title === 'Advanced Diagnostics') {
    this.router.navigate(['/reports-technology']);
  }
}


  subscribe() {
    if (this.email) {
      alert(`Thanks, ${this.email}, for subscribing to MedCare updates!`);
      this.email = '';
    } else {
      alert('Enter a valid email.');
    }
  }
}
