import { UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, UpperCasePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  private router = inject(Router);
  items = [
    { id: 1, name: 'Ditectives', routerLink: '/directives', subnav: [] },
    {
      id: 2,
      name: 'Pipes',
      routerLink: '/pipes',
      subnav: [
        {
          id: 2.1,
          name: 'Pure Pipes',
          type: 'id',
          link: 'purePipes',
        },
        {
          id: 2.2,
          name: 'Impure Pipes',
          type: 'id',
          link: 'impurePipes',
        },
      ],
    },
    { id: 1, name: 'Apps', routerLink: '/apps', subnav: [] },
  ];

  scrollToElement(child: any): void {
    const element = document.getElementById(child);
    if (element) {
      element.scrollIntoView();
    }
  }
}
