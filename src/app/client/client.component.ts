import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbsComponent } from '../layout/breadcrumbs/breadcrumbs.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, BreadcrumbsComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {
  menus: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/home',
    },

    {
      label: 'Demo',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Form',
          icon: 'pi pi-bolt',
          routerLink: '/demo/form',
        },
        {
          label: 'Dialog',
          icon: 'pi pi-server',
          routerLink: '/demo/dialog',
        },
      ],
    },
  ];
}
