import {Component, inject, OnInit} from '@angular/core';
import {GithubService} from "./github.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userName: string = '';

  private githubService = inject(GithubService);

  ngOnInit() {
    this.userName = this.githubService.userName;
  }


}
