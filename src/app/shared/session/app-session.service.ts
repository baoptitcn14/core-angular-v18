import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AppConst } from '../app-const';
import { User } from '../interfaces';
import { environment } from '../../../environments/environment.development';
import { SSO_UserClient } from '../service-proxies/sso-service-proxies';

@Injectable({
  providedIn: 'root',
})

export class AppSessionService {
  user: User | null = null;

  constructor(
    private SSO_UserClient: SSO_UserClient,
    private cookieService: CookieService
  ) {}

  init() {
    return new Observable((subscriber) => {
      let token = this.cookieService.get(AppConst.authorization.authToken);

      if (token)
        this.SSO_UserClient.getCurrentUser().subscribe(
          (res: any) => {
            this.user = res;
            subscriber.complete();
          },
          (error) => {
            this.cookieService.deleteAll('/', environment.domain);

            location.href = environment.loginUrl;

            subscriber.complete();
          }
        );
      else subscriber.complete();
    });
  }

  logout() {
    this.cookieService.deleteAll('/', environment.domain);
    location.href = environment.loginUrl;
  }
}
