import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // assume role is stored at login/signup

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // If route requires admin role
  if (state.url.startsWith('/admin') && role !== 'admin') {
    router.navigate(['/home']); // redirect non-admins
    return false;
  }

  return true;
};
