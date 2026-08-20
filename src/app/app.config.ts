import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptor/token-interceptor';
import { cachingInterceptor } from './core/interceptor/caching-interceptor';
import { errorInterceptor } from './core/interceptor/error-interceptor';
import { loaderInterceptor } from './core/interceptor/loader-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([tokenInterceptor, cachingInterceptor, errorInterceptor, loaderInterceptor]),
    ),
  ],
};
