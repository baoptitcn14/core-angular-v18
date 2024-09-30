import { Injectable, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { forkJoin, Observable, Subject, takeUntil } from 'rxjs';
import { AppConst } from '../app-const';
import { User } from '../interfaces';
import { ServiceProxyService } from '../services/service-proxy.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppSessionService {

  user: User | null =
    null;

  constructor(
    private serviceProxy: ServiceProxyService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  init() {
    return new Observable((subscriber) => {

      let token = this.cookieService.get(AppConst.authorization.authToken);

      if (token)
        this.serviceProxy.callApi(environment.apiUrl + '/api/user/getCurrentUser', [], 'post').subscribe((res: any) => {
          this.user = res;
          subscriber.complete();
        }, error => {

          this.cookieService.deleteAll('/', environment.domain);

          this.router.navigate(['/account/login']);

          subscriber.complete();
        })


      else
        subscriber.complete();
    });
  }

  logout() {
    this.serviceProxy.callApi(environment.apiUrl + '/api/logout', {}, 'post').subscribe(r => {

      this.cookieService.deleteAll('/', environment.domain);
      this.router.navigate(['/account/login']);

    }, err => { console.log(err) }, () => { })
  }

}

