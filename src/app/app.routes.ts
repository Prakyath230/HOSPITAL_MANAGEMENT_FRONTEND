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
import { CareersComponent } from './components/careers/careers.component';
import { TechnologyComponent } from './components/technology/technology.component';

import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { LogsComponent } from './admin/logs/logs.component';
import { RevenueComponent } from './admin/revenue/revenue.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // User routes
  { path: 'home', component: HomeComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'cart', component: CartComponent },
  { path: 'doctor-user', component: DoctorUserComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'reports-technology', component: TechnologyComponent },
  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'medicines', component: MedicinesComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'revenue', component: RevenueComponent },
    ]
  },

  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
