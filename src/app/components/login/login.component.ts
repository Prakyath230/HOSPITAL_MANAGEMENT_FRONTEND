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

  logName = '';
  logPassword = '';

  constructor(private router: Router, private authService: AuthService) { }

  isSignUpMode = false;

  toggleSignUp() {
    this.isSignUpMode = true;
  }

  toggleSignIn() {
    this.isSignUpMode = false;
  }

  signUp() {
    const newUser = {
      userName: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(newUser).subscribe({
      next: (res) => {
        alert('Registered successfully. Now login.');
        this.name = '';
        this.email = '';
        this.password = '';
        this.role = 'user';
        this.isSignUpMode = false;
      },
      error: (err) => {
        alert(err.error.message);
      }
    });
  }

login() {
  const logUser = {
    userName: this.logName,
    password: this.logPassword
  };

  this.authService.login(logUser).subscribe({
    next: (res: any) => {
      const token = res.token || res.jwt;
      if (!token) {
        alert('Login failed: no token received');
        return;
      }

      const role = (res.role || 'USER').toUpperCase();
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect admin to appointments page
      if (role === 'ADMIN') {
        this.router.navigate(['/admin/appointments']);
      } else {
        this.router.navigate(['/home']);
      }
    },
    error: (err) => {
      alert(err.error?.message || 'Login failed');
    }
  });
}
}