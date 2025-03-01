import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean = false;

  private apiUrl = 'http://localhost:5184/api/administrators/login'; // URL de la API

  constructor(private http: HttpClient) {}

  authenticate(user: string, password: string): Observable<{ authenticated: boolean }> {
    const params = new HttpParams()
      .set('user', user)
      .set('password', password);

    return this.http.get<{ authenticated: boolean }>(this.apiUrl, { params });
  }

  logout(){
    this.loggedIn = false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
