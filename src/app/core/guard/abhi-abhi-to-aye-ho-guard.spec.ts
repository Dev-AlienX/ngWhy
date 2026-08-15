import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { abhiAbhiToAyeHoGuard } from './abhi-abhi-to-aye-ho-guard';

describe('abhiAbhiToAyeHoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => abhiAbhiToAyeHoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
