import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MHttpInterceptor } from './core/interceptor/m.http.interceptor';
import { AppSessionService } from './shared/session/app-session.service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { API_EDU_URL } from './shared/service-proxies/edu-service-proxies';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [AppSessionService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: MHttpInterceptor, multi: true },
    { provide: API_EDU_URL, useValue: environment.apiEduUrl },
  ],
};

export function appInitializerFactory(
  appSessionService: AppSessionService
): () => Observable<any> {
  return () => appSessionService.init();
}
