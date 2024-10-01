import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FormComponent } from './demo/form/form.component';
import { DialogComponent } from './demo/dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo/demo.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./client/client.routes').then((m) => m.clientRoutes),
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
    },
  },
  {
    path: 'webview',
    loadChildren: () =>
      import('./webview-client/webview-client.component').then(
        (m) => m.WebviewClientComponent
      ),
  },
  {
    path: 'demo',
    component: DemoComponent,
    data: {
      breadcrumb: 'Demo',
    },
    children: [
      {
        path: 'form',
        component: FormComponent,
        data: {
          breadcrumb: 'Form',
        },
      },
      {
        path: 'dialog',
        component: DialogComponent,
        data: {
          breadcrumb: 'Dialog',
        },
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];
