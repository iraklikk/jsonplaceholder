import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entity/user";
import {Post} from "../entity/post";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  // Using HttpClient to comunicate with backend server
  constructor(private http: HttpClient) { }


  // returns all Users from server
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  // returns all Posts of a concrete user
  getPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
