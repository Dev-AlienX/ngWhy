import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPallets } from './color-pallets';

describe('ColorPallets', () => {
  let component: ColorPallets;
  let fixture: ComponentFixture<ColorPallets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPallets],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPallets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
