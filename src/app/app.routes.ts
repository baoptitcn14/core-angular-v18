import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FormComponent } from './demo/form/form.component';
import { DialogComponent } from './demo/dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo/demo.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
    },
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
