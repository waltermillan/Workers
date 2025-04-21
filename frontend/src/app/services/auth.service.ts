import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GLOBAL } from '../configuration/configuration.global';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'administrators';

  private loggedInKey = 'isLoggedIn';
  private userNameKey = 'userName';
  private userIdKey = 'userId';
  private userRolName = 'rolId';

  private userNameSubject = new BehaviorSubject<string>(''); // BehaviorSubject to store the user name
  private userRoleSubject = new BehaviorSubject<string>(''); // BehaviorSubject to store the user name
  userName$ = this.userNameSubject.asObservable(); // expose the observable for other components to subscribe to
  userRole$ = this.userRoleSubject.asObservable(); // expose the observable for other components to subscribe to

  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined') {
      const storedUserName = localStorage.getItem(this.userNameKey);
      if (storedUserName) {
        this.userNameSubject.next(storedUserName);
      }

      const storedRoleName = localStorage.getItem(this.userRolName);
      if (storedRoleName) {
        this.userRoleSubject.next(storedRoleName);
      }
    }
  }

  login(username: string, password: string): Observable<any> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}/login`;

    const body = {
      usr: username,
      psw: password,
    };
    return this.http.post(url, body).pipe(
      tap((res: any) => {
        localStorage.setItem(this.loggedInKey, 'true');
        localStorage.setItem(this.userNameKey, username);
        localStorage.setItem(this.userIdKey, res.data.id.toString());
        localStorage.setItem(this.userRolName, res.data.name);
        this.userNameSubject.next(username);
        this.userRoleSubject.next(res.data.name);
      })
    );
  }

  logout() {
    // Only interact with localStorage if in the browser
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.loggedInKey);
      localStorage.removeItem(this.userNameKey);
      this.userNameSubject.next('');
    }
  }

  getRolId(): string | null {
    const storedRol = localStorage.getItem(this.userRolName);
    return storedRol;
  }

  getUserId(): number | null {
    const storedId = localStorage.getItem(this.userIdKey);
    return storedId ? +storedId : null;
  }

  getUserName(): string | null {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem(this.userNameKey);
      return storedName ? storedName : null;
    }
    return null;
  }

  isLoggedIn(): boolean {
    // Only interact with localStorage if in the browser
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.loggedInKey) === 'true';
    }
    return false;
  }
}
