import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { naamBataoGuard } from './naam-batao-guard';

describe('naamBataoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => naamBataoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
