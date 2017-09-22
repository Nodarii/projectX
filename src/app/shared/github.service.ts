import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class GithubIssue {
  'url': string;
  'repository_url': string;
  'labels_url': string;
  'comments_url': string;
  'events_url': string;
  'html_url': string;
  'id': number;
  'number': number;
  'title': string;
  'user': {
    'login': string;
    'id': number,
    'avatar_url': string;
    'gravatar_id': string;
    'url': string;
    'html_url': string;
    'followers_url': string;
    'following_url': string;
    'gists_url': string;
    'starred_url': string;
    'subscriptions_url': string;
    'organizations_url': string;
    'repos_url': string;
    'events_url': string;
    'received_events_url': string;
    'type': string;
    'site_admin': boolean
  };
  'labels': string[];
  'state': string;
  'locked': boolean;
  'assignee': null;
  'assignees': string[];
  'milestone': null;
  'comments': number;
  'created_at': string;
  'updated_at': string;
  'closed_at': null;
  'author_association': string;
  'body': string;
}

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) {
  }

  get url(): string {
    return 'https://api.github.com/repos/vmg/redcarpet/issues';
  }

  loadIssues(): Observable<GithubIssue[]> {
    return this.http.get<GithubIssue[]>(this.url);
  }

  updateIssue(id: string, body: GithubIssue): Observable<GithubIssue> {
    return this.http.put<GithubIssue>(`${this.url}/${id}`, body);
  }

  createIssue(body: GithubIssue): Observable<GithubIssue> {
    return this.http.post<GithubIssue>(this.url, body);
  }

  deleteIssue(id: string): Observable<GithubIssue> {
    return this.http.delete<GithubIssue>(`${this.url}/${id}`);
  }

}
