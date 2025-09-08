import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';
  private sessionKey = 'sessionUser';

  // Register new user
  register(user: any) {
    let users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    if (users.some((u: any) => u.email === user.email)) {
      return false;
    }
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  // Login
  login(email: string, password: string) {
    let users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem(this.sessionKey, JSON.stringify(found));
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem('token', token);
      localStorage.setItem('role', found.role || 'user');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.sessionKey);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.sessionKey) && !!localStorage.getItem('token');
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem(this.sessionKey) || 'null');
    if (!user) return null;
    const role = localStorage.getItem('role');
    return { ...user, role };
  }

  isAdmin() {
    const role = localStorage.getItem('role');
    return role !== null && role.toLowerCase() === 'admin';
  }

  isUser() {
    const role = localStorage.getItem('role');
    return role !== null && role.toLowerCase() === 'user';
  }
}
