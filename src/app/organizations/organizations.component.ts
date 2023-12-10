import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Organization} from "../organization";
import {GithubService} from "../github.service";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  private githubService = inject(GithubService);

  orgs$: Observable<Organization[]> | undefined;

  ngOnInit() {
    this.orgs$ = this.githubService.getOrganizations();
  }
}
