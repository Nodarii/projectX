import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectX';
  issues: any;
  constructor (private http: HttpClient) {
    this.http.get('https://api.github.com/repos/vmg/redcarpet/issues').subscribe((response) => {
      console.log(response);
      this.issues = response;
    });

    console.log('request is sent');
  }
}

