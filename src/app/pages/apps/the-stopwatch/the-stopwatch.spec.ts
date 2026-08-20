import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStopwatch } from './the-stopwatch';

describe('TheStopwatch', () => {
  let component: TheStopwatch;
  let fixture: ComponentFixture<TheStopwatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheStopwatch],
    }).compileComponents();

    fixture = TestBed.createComponent(TheStopwatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
