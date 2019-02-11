import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import "angular2-navigate-with-data";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsPageModule} from './news-feed/index';
import {EditArticleModule} from "./edit-article/index";
import {NewsItemComponent} from "./news-item/index";

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NewsPageModule,
    EditArticleModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
