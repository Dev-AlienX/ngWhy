import { CanMatchFn } from '@angular/router';

export const kaamBataoGuard: CanMatchFn = (route, segments) => {
  return true;
};
