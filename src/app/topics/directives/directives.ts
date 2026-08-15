import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {}
