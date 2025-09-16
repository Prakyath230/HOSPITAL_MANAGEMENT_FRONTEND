import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/auth/login') || req.url.includes('/auth/register')) {
    return next(req);
  }
  const token = localStorage.getItem('token');
  if (token) {
    const newReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(newReq);
  }
  return next(req);
};