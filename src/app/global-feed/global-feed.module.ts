import { FeedTogglerModule } from './../shared/modules/feed-toggler/feed-toggler.module';
import { PopularTagsModule } from './../shared/modules/popular-tags/popular-tags.module';
import { BannerModule } from './../shared/modules/banner/banner.module';
import { FeedModule } from './../shared/modules/feed/feed.module';
import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';



@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ]
})
export class GlobalFeedModule { }
