import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./client/client.routes').then((m) => m.clientRoutes),
  },
  {
    path: 'webview',
    loadChildren: () =>
      import('./webview-client/webview-client.component').then(
        (m) => m.WebviewClientComponent
      ),
  },

  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];
