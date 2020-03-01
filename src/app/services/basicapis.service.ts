import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicapisService {

  constructor(private http: HttpClient) { }
private BaseUrl = `http://localhost:8080/greetings`;

getuserdetails() {
  return this.http.get(this.BaseUrl + '/userdetails');
}
}
