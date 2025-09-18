import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AdminProfileComponent implements OnInit {
  admin = {
    name: 'John Doe',
    email: 'admin@hospital.com',
    role: 'Administrator',
    phone: '123-456-7890'
  };

  profilePic: string = 'https://i.pravatar.cc/150?img=12'; // fixed URL

  ngOnInit(): void {
    const saved = JSON.parse(localStorage.getItem('adminProfile') || '{}');
    if (saved.admin) this.admin = saved.admin;
  }

  saveProfile(): void {
    localStorage.setItem('adminProfile', JSON.stringify({ admin: this.admin }));
  }
}
