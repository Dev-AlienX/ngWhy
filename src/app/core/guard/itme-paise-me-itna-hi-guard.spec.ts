import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { itmePaiseMeItnaHiGuard } from './itme-paise-me-itna-hi-guard';

describe('itmePaiseMeItnaHiGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => itmePaiseMeItnaHiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
