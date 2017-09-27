import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserLinksComponent } from './user-links/user-links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdIconModule, MdListModule, MdSidenavModule, MdTableModule,
  MdToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './shared/github.service';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    UserLinksComponent,
    HomeComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdTableModule,
    AppRoutesModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
