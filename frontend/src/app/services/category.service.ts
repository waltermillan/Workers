import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/category.model';
import { GLOBAL } from '../configuration/configuration.global';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  endpoint: string = 'categories';

  constructor(private http: HttpClient) {}

  // Get all Categories
  getAll(useDto = false): Observable<Category[]> {
    return this.http.get<Category[]>(`${GLOBAL.apiBaseUrl}/${this.endpoint}`);
  }

  // Get a Category by ID
  getById(id: number): Observable<Category> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}/${id}`;
    return this.http.get<Category>(url);
  }

  // Get for add Category
  add(category: Category): Observable<Category> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}`;
    return this.http.post<Category>(url, category);
  }

  // Update a Category
  update(category: Category): Observable<Category> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}`;
    return this.http.put<Category>(url, category);
  }

  // Delete a Category by ID
  delete(id: number): Observable<Category> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}/${id}`;
    return this.http.delete<Category>(url);
  }
}
