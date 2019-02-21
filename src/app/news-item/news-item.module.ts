import {NgModule} from '@angular/core';

import { SharedModule } from "../shared/index";
import { NewsItemComponent } from "./news-item.component";

@NgModule({
  declarations: [
    NewsItemComponent
  ],
  exports: [
    NewsItemComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class NewsItemModule {
}
