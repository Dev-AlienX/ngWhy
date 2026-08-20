import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './apps.html',
  styleUrl: './apps.scss',
})
export class Apps {}
