import {Component, inject, OnInit} from '@angular/core';
import {GithubService} from "../github.service";
import {Observable} from "rxjs";
import {User} from "../user";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  user$: Observable<User | undefined> | undefined;

  private githubService = inject(GithubService);

  ngOnInit() {
    this.user$ = this.githubService.getUser();
  }
}
