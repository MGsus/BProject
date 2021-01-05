import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../shared/models/user.model';

@Injectable()
export class AuthService {
  user: User;
  constructor(private http: HttpClient) {}

  isAuth(): Observable<User> {
    if (typeof this.user === 'undefined')
      return this.checkAuth().pipe(
        tap(
          (ans) => (this.user = ans),
          (err) => console.log(err)
        )
      );
    else return of(this.user);
  }

  private isLoggedURL = 'http://169.57.42.77:30937/auth/logged';
  checkAuth(): Observable<User> {
    console.log('calling auth service');
    let req = this.http.get<User>(this.isLoggedURL, { withCredentials: true });
    return req;
  }
}
