import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import "angular2-navigate-with-data";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsPageModule} from './news-feed/index';
import {EditArticleModule} from "./edit-article/index";
import { NewsItemModule} from "./news-item/index";
import { NewsService } from "./services/index";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NewsPageModule,
    NewsItemModule,
    EditArticleModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
