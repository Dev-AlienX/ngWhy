import { HttpInterceptorFn } from '@angular/common/http';

export const notificationInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
