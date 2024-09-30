import { Injectable, OnInit } from '@angular/core';
import { ServiceProxyService } from './service-proxy.service';
import { AppConst } from '../app-const';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  logo: any = {};
  listSlider: any[] = [];

  tenantInfo: any = {};

  constructor(
    private serviceProxy: ServiceProxyService
  ) { }

  initAllSetting() {
    this.getTenantInfo();
  }

  getTenantInfo() {
    this.serviceProxy.callApi(environment.apiUrl + '/api/setting/getByKey/' + AppConst.keySetting.TENANT_INFO, {}, 'get').subscribe((res: any) => {
      this.tenantInfo = res.value ? JSON.parse(res.value) : {
        tenantName: '',
        tenantInfo: [],
        contact: []
      };

      this.tenantInfo.tenantInfo.forEach((e: any) => {
        e.hotline = e.hotline ? e.hotline.split(',') : [];
      })
    });
  }
}
