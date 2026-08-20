// admin/admin.routes.ts
import { Routes } from '@angular/router';

export const APPS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./apps').then((m) => m.Apps),
    children: [
      {
        path: 'addTOCart',
        loadComponent: () => import('./add-to-cart/add-to-cart').then((m) => m.AddToCart),
      },
      {
        path: 'toDo',
        loadComponent: () => import('./todo-app/todo-app').then((m) => m.TodoApp),
      },
      {
        path: 'colorPallets',
        loadComponent: () => import('./color-pallets/color-pallets').then((m) => m.ColorPallets),
      },
      {
        path: 'justForm',
        loadComponent: () => import('./justform-example/justform-example').then((m) => m.JustformExample),
      },
      {
        path: '',
        redirectTo: 'apps',
        pathMatch: 'full',
      },
    ],
  },
];
