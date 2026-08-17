import { Component } from '@angular/core';
import { snippits } from './snippits';
import { CodeRenderer } from "../../shared/components/code-renderer/code-renderer";
import { InlineCode } from "../../shared/directives/inline-code";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CodeRenderer, InlineCode],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  snippits = new snippits();
}
