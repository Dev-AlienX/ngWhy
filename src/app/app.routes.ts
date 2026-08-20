import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { naamBataoGuard } from './core/guard/naam-batao-guard';
import { kaamBataoGuard } from './core/guard/kaam-batao-guard';
import { itmePaiseMeItnaHiGuard } from './core/guard/itme-paise-me-itna-hi-guard';
import { abhiAbhiToAyeHoGuard } from './core/guard/abhi-abhi-to-aye-ho-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'pipes',
    loadComponent: () => import('./topics/pipes/pipes').then((m) => m.Pipes),
    canActivate: [naamBataoGuard, abhiAbhiToAyeHoGuard],
  },
  {
    path: 'directives',
    loadChildren: () =>
    import('./topics/directives/directives.routes').then((m) => m.DIRECTIVES_ROUTES),
    canActivateChild: [kaamBataoGuard, itmePaiseMeItnaHiGuard],
  },
  {
    path: 'apps',
    loadChildren: () => import('./pages/apps/apps.routes').then((m) => m.APPS_ROUTES),
    canActivateChild: [kaamBataoGuard, itmePaiseMeItnaHiGuard],
  },
];
