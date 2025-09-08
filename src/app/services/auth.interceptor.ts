import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Intercepted request:', req);
  const newHeader=req.clone({
    setHeaders: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return next(newHeader);
};




