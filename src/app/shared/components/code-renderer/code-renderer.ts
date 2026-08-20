import {
  AfterViewChecked,
  Component,
  ElementRef,
  input,
  ViewChild,
} from '@angular/core';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('sh', bash);

@Component({
  selector: 'app-code-renderer',
  standalone: true,
  templateUrl: './code-renderer.html',
  styleUrl: './code-renderer.scss',
})
export class CodeRenderer implements AfterViewChecked {
  code = input.required<string>();
  language = input<string>('typescript');

  @ViewChild('codeElement') codeElement!: ElementRef<HTMLElement>;

  ngAfterViewChecked(): void {
    const el = this.codeElement?.nativeElement;
    if (!el) {
      return;
    }

    const lang = this.normalizeLanguage(this.language());
    const html = hljs.highlight(this.code(), { language: lang }).value;
    el.innerHTML = html;
    el.className = `language-${lang}`;
  }

  private normalizeLanguage(lang?: string): string {
    const value = (lang ?? 'typescript').toLowerCase();

    if (value === 'ts' || value === 'typescript') return 'typescript';
    if (value === 'js' || value === 'javascript') return 'javascript';
    if (value === 'html' || value === 'markup' || value === 'xml') return 'xml';
    if (value === 'css') return 'css';
    if (value === 'json') return 'json';
    if (value === 'bash' || value === 'sh' || value === 'shell') return 'bash';

    return value || 'typescript';
  }
}
