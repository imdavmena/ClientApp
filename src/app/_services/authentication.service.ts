import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<User | any>;
  public user: Observable<User | any>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private decode: JwtHelperService
  ) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/Authentication/Login`, {
        email,
        password,
      })
      .pipe(
        map(d => {
          const data = this.decode.decodeToken(d.token);
          localStorage.setItem('user', JSON.stringify(data));
          this.userSubject.next(data);
          return this.user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
