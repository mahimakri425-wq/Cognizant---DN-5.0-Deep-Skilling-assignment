import { inject } from '@angular/core';
import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      console.error('Global HTTP error:', error);

      if (error.status === 401) {
        router.navigate(['/']);
      }

      if (error.status === 500) {
        alert(
          'Server error occurred. Please try again later.'
        );
      }

      return throwError(() => error);
    })
  );
};