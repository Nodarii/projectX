import { Component, OnInit } from '@angular/core';
import { GithubIssue, GithubService } from '../shared/github.service';
import { IssuesDataSource } from './issues.datasource';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: GithubIssue[];
  issuesDataSource: IssuesDataSource;
  displayedColumns = ['title', 'state', 'user'];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.issuesDataSource = new IssuesDataSource(this.githubService);
    this.githubService.loadIssues().subscribe((issues: GithubIssue[]) => {
      this.issues = issues;
    });
  }

}
