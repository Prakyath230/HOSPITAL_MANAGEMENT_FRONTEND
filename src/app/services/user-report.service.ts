import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
}

export interface Report {
  id: number;
  title: string;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserReportService {
  private user: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    age: 28,
    gender: 'Male',
  };

  private reports: Report[] = [
    { id: 1, title: 'Blood Test', date: '2025-08-10', status: 'Completed' },
    { id: 2, title: 'X-Ray Report', date: '2025-08-15', status: 'Pending' },
    { id: 3, title: 'MRI Scan', date: '2025-08-20', status: 'In Progress' }
  ];

  /** Get user profile */
  getUserProfile(): Observable<User> {
    return of(this.user).pipe(delay(500));
  }

  /** Update user profile */
  updateUserProfile(updatedUser: User): Observable<User> {
    this.user = { ...updatedUser };
    return of(this.user).pipe(delay(500));
  }

  /** Get user reports */
  getUserReports(): Observable<Report[]> {
    return of(this.reports).pipe(delay(500));
  }
}
