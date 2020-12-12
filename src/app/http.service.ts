import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  urlUser = 'https://jsonplaceholder.typicode.com/users/';
  jsonPosts: Observable<any>;
  jsonUser: Observable<any>;

  getDataPosts(): void {
    this.jsonPosts = this.http.get(this.urlPosts);
  }

  getDataUser(id): void {
    this.jsonUser = this.http.get(`${this.urlUser}${id}`);
  }
}
