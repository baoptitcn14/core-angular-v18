import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(environment.apiUrl + '/api/user');
  }

  get(id: number) {
    return this.http.get<any>(environment.apiUrl + '/api/user/' + id);
  }

  update(id: number, data: any) {
    return this.http.put(environment.apiUrl + '/api/user/' + id, data);
  }

  delete(id: number) {
    return this.http.delete(environment.apiUrl + '/api/user/' + id);
  }

  create(data: any) {
    return this.http.post(environment.apiUrl + '/api/user', data);
  }

  // getCurrentUser() {
  //   return this.http.get<UserDto>(environment + '/api/services/sso/read/User/GetCurrentUser');
  // }
}
