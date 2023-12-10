import {Component, inject, OnInit} from '@angular/core';
import {GithubService} from "../github.service";
import {map, Observable} from "rxjs";
import {Repository} from "../repository";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repos$: Observable<Repository[]> | undefined;

  private githubService = inject(GithubService);

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos().pipe(
      map(repos => repos.filter(repo => !repo.fork))
    );
  }
}
