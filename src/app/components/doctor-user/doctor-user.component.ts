import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { DoctorUserService } from '../../services/DoctorUserService.service';


@Component({
  selector: 'app-doctor-user',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './doctor-user.component.html',
  styleUrls: ['./doctor-user.component.css']
})
export class DoctorUserComponent implements OnInit {
  searchTerm: string = '';
  doctors: any[] = [];

  constructor(private doctorService: DoctorUserService) {}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  get filteredDoctors() {
    if (!this.searchTerm.trim()) return this.doctors;
    const term = this.searchTerm.toLowerCase();
    return this.doctors.filter(d =>
      d.name.toLowerCase().includes(term) || d.specialty.toLowerCase().includes(term)
    );
  }
}