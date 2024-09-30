import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppSessionService } from '../session/app-session.service';

export const authRouteGuard: CanActivateFn = (route, state) => {
  const appSession = inject(AppSessionService);
  if (!appSession.user) {
    inject(Router).navigate(['/account/login']);
    return false;
  }

  return true;
};
