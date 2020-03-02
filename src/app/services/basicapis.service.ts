import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class BasicapisService {

  constructor(private http: HttpClient) { }
  private BaseUrl = `http://localhost:8080/users`;

  getuserdetails() {
    return this.http.get(this.BaseUrl + '/userdetails');
  }
  addusers(usersdatas: Users) {
    return this.http.post(this.BaseUrl + '/add', usersdatas);
  }
}
