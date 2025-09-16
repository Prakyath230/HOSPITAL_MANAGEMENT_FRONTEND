import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) {}

logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
