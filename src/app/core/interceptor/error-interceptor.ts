import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { error } from 'console';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Unauthorized request - Redirecting to login...');
        // Add logout or redirect logic here
      } else if (error.status === 403) {
        console.error('Forbidden - You do not have permission.');
      } else if (error.status === 500) {
        console.error('Server error occurred.');
      } else {
        console.error(`Backend returned code ${error.status}, body was: `, error.error);
      }
      return throwError(() => new Error(error.message || 'Something went wrong'));
    }),
  );
};
