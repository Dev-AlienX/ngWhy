import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { kaamBataoGuard } from './kaam-batao-guard';

describe('kaamBataoGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => kaamBataoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
