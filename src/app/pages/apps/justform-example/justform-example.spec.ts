import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustformExample } from './justform-example';

describe('JustformExample', () => {
  let component: JustformExample;
  let fixture: ComponentFixture<JustformExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustformExample],
    }).compileComponents();

    fixture = TestBed.createComponent(JustformExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
