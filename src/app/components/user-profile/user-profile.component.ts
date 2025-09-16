import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";

export interface User {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent]
})
export class UserProfileComponent {
  user: User = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    age: 28,
    gender: 'Male'
  };

  private originalUser: User = { ...this.user };
  editMode = false;

  toggleEdit() {
    if (!this.editMode) {
      this.originalUser = { ...this.user };
      this.editMode = true;
    } else {
      this.user = { ...this.originalUser };
      this.editMode = false;
    }
  }

  saveProfile() {
    this.editMode = false;
  }
}
