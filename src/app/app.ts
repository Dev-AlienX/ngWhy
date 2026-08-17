import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './shared/components/header/header';
import {Footer} from './shared/components/footer/footer';
import {Sidebar} from './shared/components/sidebar/sidebar';
import {Loader} from './shared/components/loader/loader';
import {Notification} from './shared/components/notification/notification';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sidebar, Loader, Notification],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ngWhy');
}
