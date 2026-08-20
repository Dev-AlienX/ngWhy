import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[inlineCode]',
})
export class InlineCode {
  private elementRef = inject(ElementRef);
  ngAfterViewChecked(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.position = 'relative';
    element.style.padding = '0 .3rem';
    element.style.background = 'var(--subtle-purple)';
    element.style.color = 'var(--color-accent-primary)';
    element.style.maxWidth = 'max-content';
    element.style.borderRadius = '0.25rem';
  }
}
    // position: relative;
    // padding: 0 .3rem;
    // background: var(--subtle-purple);
    // color: var(--hot-pink);
    // max-width: max-content;
    // border-radius: .25rem;