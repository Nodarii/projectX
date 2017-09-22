import { Component, OnInit } from '@angular/core';
import { GithubIssue, GithubService } from '../shared/github.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: GithubIssue[];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.loadIssues().subscribe((issues: GithubIssue[]) => {
      this.issues = issues;
    });
  }

}
