import { CanActivateChildFn } from '@angular/router';

export const itmePaiseMeItnaHiGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
