export class snippits {
  exampleBuiltInPipe = `import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  template: \`
    <main>
      <!-- Transform the company name to title-case and
           transform the purchasedOn date to a locale-formatted string -->
      <h1>Purchases from {{ company | titlecase }} on {{ purchasedOn | date }}</h1>

      <!-- Transform the amount to a currency-formatted string -->
      <p>Total: {{ amount | currency }}</p>
    </main>
  \`,
})
export class ShoppingCart {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}`;
  exampleOutput = `<main>
  <h1>Purchases from Acme Corporation on Jul 8, 2024</h1>
  <p>Total: $123.45</p>
</main>`;

  usingpipes = `<p>Total: {{ amount | currency }}</p>`;
  displayLocalizeddate = `<p>The event will occur on {{ scheduledOn | date | uppercase }}.</p>`;
  formatthedate = `<p>The event will occur at {{ scheduledOn | date: 'hh:mm' }}.</p>`;

  controlthetimezone = `<p>The event will occur at {{ scheduledOn | date: 'hh:mm' : 'UTC' }}.</p>`;

  Howpipeswork = `import {Component} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe],
  template:  \`
    <main>
      <p>Total: {{ amount | currency }}</p>
    </main>
   \`,
})
export class AppComponent {
  amount = 123.45;
}`;
lowerprecedence = `<!-- firstName and lastName are concatenated before the result is passed to the uppercase pipe -->
{{ firstName + lastName | uppercase }}`

higherprecedence = `{{ (isAdmin ? 'Access granted' : 'Access denied') | uppercase }}`
 writtenwithoutparentheses = `{{ isAdmin ? 'Access granted' : 'Access denied' | uppercase }}`
parsedinsteadas = `{{ isAdmin ? 'Access granted' : ('Access denied' | uppercase) }}`

custompipe = `// kebab-case.pipe.ts
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'kebabCase',
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '-');
  }
}`

custompipeimport = `import {Pipe} from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe {}`

PipeTransform = `import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe implements PipeTransform {}`

transformation = `import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: string): string {
    return \`My custom transformation of &#36;{value}.\`;
  }
}`

parameterstransformation = `import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: string, format: string): string {
    let msg =  \`My custom transformation of &#36;{value}. \`;

    if (format === 'uppercase') {
      return msg.toUpperCase();
    } else {
      return msg;
    }
  }
}`

Avoidcreatingimpurepipes = `import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'joinNamesImpure',
  pure: false,
})
export class JoinNamesImpurePipe implements PipeTransform {
  transform(names: string[]): string {
    return names.join();
  }
}`
standalonefunction = `export function toKebabCase(value: string): string {
  return value.toLowerCase().replace(/ /g, '-');`

functiondirectlywherever = `import {Pipe, PipeTransform} from '@angular/core';
import {toKebabCase} from './kebab-case';

@Pipe({name: 'kebabCase'})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return toKebabCase(value);
  }
}`
functiondirectlywherever2 = `import {Service} from '@angular/core';
import {toKebabCase} from './kebab-case';

@Service()
export class FormatterService {
  formatSlug(title: string): string {
    return toKebabCase(title);
  }
}`
functiondirectlywherever3 = `import {Service} from '@angular/core';
import {KebabCasePipe} from './kebab-case.pipe';

@Service()
export class FormatterService {
  // Avoid injecting the pipe class into services or other classes.
  private kebabCasePipe = inject(KebabCasePipe);

  formatSlug(title: string): string {
    return this.kebabCasePipe.transform(title);
  }
}`

typescriptprefer = `import {Service, LOCALE_ID, inject} from '@angular/core';
import {formatNumber} from '@angular/common';

@Service()
export class PriceService {
  private locale = inject(LOCALE_ID);

  format(value: number) {
    return formatNumber(value, this.locale, '1.2-2');
  }
}`

typescriptavoid = `import {Service} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Service()
export class PriceService {
  private decimalPipe = inject(DecimalPipe);

  format(value: number) {
    return this.decimalPipe.transform(value, '1.2-2');
  }
}`







}
