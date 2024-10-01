import { NgModule } from '@angular/core';
import { SSO_UserClient } from './sso-service-proxies';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    // begin sso
    SSO_UserClient,
    // end sso
  ],
})
export class ServiceProxiesModule {}
