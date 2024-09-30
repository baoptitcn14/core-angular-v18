import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IPageList>(environment.apiUrl + '/api/category');
  }

  getList(data: IInputGetList) {
    return this.http.post<IPageList>(
      environment.apiUrl + '/api/category/getList',
      data
    );
  }

  get(id: number) {
    return this.http.get<ICategory>(environment.apiUrl + '/api/category/' + id);
  }

  update(id: number, data: ICategory) {
    return this.http.put(environment.apiUrl + '/api/category/' + id, data);
  }

  delete(id: number) {
    return this.http.delete(environment.apiUrl + '/api/category/' + id);
  }

  create(data: ICategory) {
    return this.http.post(environment.apiUrl + '/api/category', data);
  }

  createList(data: ICategory[]) {
    return this.http.post(
      environment.apiUrl + '/api/category/createList',
      data
    );
  }
}

export interface ICategory {
  id: number;
  name: string;
  code: string;
  group_code: string;
  status: string;
  created_at: string;
  updated_at: string;
  index: number;
  code_data: string;
  order: number;
  parent_id: string;
  isHasChild: boolean;
  isToggled: boolean;
  isHidden: boolean;
  listChild: ICategory[];
  permissions: string;
  listPermission: any[];
  isCheckedDisabled: boolean;
  isChecked: boolean;
}

export interface ICriterias {
  property: string;
  operator: string;
  value: string;
}

export interface IInputGetList {
  criterias: string[][];
  orderBy: string;
  pageSize?: number;
  category_code_data?: string;
  category_group_code?: string;
  field?: string;
}

export interface IPageList {
  current_page: number;
  data: any[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
