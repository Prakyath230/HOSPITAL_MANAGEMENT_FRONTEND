import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AboutComponent } from './components/about/about.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { CartComponent } from './components/cart/cart.component';
import { DoctorUserComponent } from './components/doctor-user/doctor-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // User routes
  { path: 'home', component: HomeComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'medicine', component: MedicineComponent },
  {path: 'cart', component: CartComponent},
  { path: 'doctor-user', component: DoctorUserComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'reports-technology', component: TechnologyComponent },
  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'profile', component: AdminProfileComponent }
    ]
  },
  
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
