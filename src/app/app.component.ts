import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login_authentication';
  isLoggedIn = false;
  showNavbar = true;

  constructor(private router: Router, private auth: AuthService) {
    this.router.events.subscribe(event => {
  if (event instanceof NavigationEnd) {
    if (event.urlAfterRedirects.includes('/login')) {
      this.showNavbar = false; 
    } else if (this.auth.isLoggedIn() && this.auth.isAdmin()) {
      this.showNavbar = false; 
    } else if (this.auth.isLoggedIn() && this.auth.isUser()) {
      this.showNavbar = true; 
    } else {
      this.showNavbar = false;
    }
  }
});
  }
  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
}
