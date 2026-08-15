// admin/admin.routes.ts
import { Routes } from '@angular/router';

export const DIRECTIVES_ROUTES: Routes = [
  {
    path: '', // Matches the base path ('/admin')
    loadComponent: () => import('./directives').then(m => m.Directives),
    children: [
      {
        path: 'attribute', // Matches '/admin/users'
        loadComponent: () => import('./attribute-directives/attribute-directives').then(m => m.AttributeDirectives)
      },
      {
        path: 'structural', // Matches '/admin/settings'
        loadComponent: () => import('./structural-directives/structural-directives').then(m => m.StructuralDirectives)
      },
      {
        path: '',
        redirectTo: 'directives',
        pathMatch: 'full'
      }
    ]
  }
];
