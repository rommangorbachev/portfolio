import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {Repository} from "./repository";

@Injectable()
export class GithubService {

  readonly userName: string = 'rommangorbachev';
  readonly apiUrl: string = 'https://api.github.com';
  private userUrl = 'https://api.github.com/users/' + this.userName;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  }
}
