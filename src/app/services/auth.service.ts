import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usercredentials } from './usercredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BaseUrl = `http://localhost:8080/log`;

  constructor(private http: HttpClient) { }

  cerateaccount(userdetails: Usercredentials) {
    return this.http.post(this.BaseUrl + '/signup', userdetails);
  }

  login(userdetails: Usercredentials) {
    return this.http.post<any>(this.BaseUrl + '/login', userdetails)
      .map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
