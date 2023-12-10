import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class GithubService {

  readonly userName: string = 'rommangorbachev';
  readonly apiUrl: string = 'https://api.github.com';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${this.userName}`);
  }
}
