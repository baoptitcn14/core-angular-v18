import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { DemoComponent } from '../demo/demo/demo.component';
import { DialogComponent } from '../demo/dialog/dialog.component';
import { FormComponent } from '../demo/form/form.component';
import { HomeComponent } from '../home/home.component';

export const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
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
    ],
  },
];
