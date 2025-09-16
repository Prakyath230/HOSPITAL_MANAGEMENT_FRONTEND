import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';
  private sessionKey = 'sessionUser';
  baseUrl: string = '/auth'

  constructor(private http: HttpClient) { }

  // Register new user
  register(user: any): Observable<any> {
    return this.http.post(this.baseUrl + '/register', user)
  }

  // Login
  login(req: any): Observable<any> {
    return this.http.post(this.baseUrl + '/login', req)
  }

  logout() {
    localStorage.removeItem(this.sessionKey);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

}
