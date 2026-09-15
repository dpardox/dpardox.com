import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, UrlSerializer } from '@angular/router';

import { UrlSerializerAdapter } from '@infrastructure/adapters/url-serializer.adapter';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    { provide: UrlSerializer, useClass: UrlSerializerAdapter },
  ]
};
