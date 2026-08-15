import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { itmePaiseMeItnaHiGuard } from './itme-paise-me-itna-hi-guard';

describe('itmePaiseMeItnaHiGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => itmePaiseMeItnaHiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
