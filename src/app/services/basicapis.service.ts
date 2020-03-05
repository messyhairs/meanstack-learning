import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Moredetails } from './users';


@Injectable({
  providedIn: 'root'
})
export class BasicapisService {

  constructor(private http: HttpClient) { }
  private BaseUrl1 = `http://localhost:8080/log`;
  private BaseUrl = `http://localhost:8080/users`;

  getuserdetails() {
    return this.http.get(this.BaseUrl + '/userdetails');
  }
  addusers(usersdatas: Users) {
    return this.http.post(this.BaseUrl + '/add', usersdatas);
  }
  addmoredetails(moredetails: Moredetails) {
    return this.http.post(this.BaseUrl1 + '/moredetails', moredetails);
  }
  getuserinfo() {
    return this.http.get(this.BaseUrl1 + '/userdetails');

  }
  edituserinfo(id) {
    return this.http.get(this.BaseUrl1 + '/edit/' + id);
  }
  deleteBusiness(id) {
    return this.http.get(this.BaseUrl1 + '/delete', id);
  }
}
