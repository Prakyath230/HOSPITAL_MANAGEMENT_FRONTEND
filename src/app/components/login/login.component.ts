import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name = '';
  email = '';
  password = '';
  role = 'user';

  logEmail = '';
  logPassword = '';

  constructor(private router: Router, private auth: AuthService) {}

  isSignUpMode = false;

  toggleSignUp() {
    this.isSignUpMode = true;
  }

  toggleSignIn() {
    this.isSignUpMode = false;
  }

  signUp() {
    if (!this.name || !this.email || !this.password || !this.role) {
      alert('Fill all fields and select role');
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    const success = this.auth.register(user);
    if (!success) {
      alert('Email already registered. Try logging in.');
    } else {
      alert('Registered successfully. Now login.');
      this.name = this.email = this.password = '';
      this.role = 'user';
      this.isSignUpMode = false;
    }
  }

  login() {
    if (!this.logEmail || !this.logPassword) {
      alert('Enter both email and password');
      return;
    }

    const success = this.auth.login(this.logEmail, this.logPassword);

    if (success) {
      const loggedUser = this.auth.getUser();
      alert('Login successful');

      if (loggedUser.role.toLowerCase() === 'admin') {
        this.router.navigate(['/admin/dashboard']); 
            } else {
              this.router.navigate(['/home']);
            }

      this.logEmail = this.logPassword = '';
    } else {
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      const exists = users.some((u: any) => u.email === this.logEmail);
      if (!exists) {
        alert('User not found. Please sign up first.');
      } else {
        alert('Wrong password. Try again.');
      }
    }
  }
}
