import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeRenderer } from './code-renderer';

describe('CodeRenderer', () => {
  let component: CodeRenderer;
  let fixture: ComponentFixture<CodeRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeRenderer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeRenderer);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('code', 'const answer = 42;');
    fixture.componentRef.setInput('language', 'typescript');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should highlight rendered code without throwing', () => {
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
