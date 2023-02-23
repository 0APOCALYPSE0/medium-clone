import { FeedTogglerModule } from './../shared/modules/feed-toggler/feed-toggler.module';
import { PopularTagsModule } from './../shared/modules/popular-tags/popular-tags.module';
import { BannerModule } from './../shared/modules/banner/banner.module';
import { FeedModule } from './../shared/modules/feed/feed.module';
import { YourFeedRoutingModule } from './your-feed-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';



@NgModule({
  declarations: [
    YourFeedComponent
  ],
  imports: [
    CommonModule,
    YourFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ]
})
export class YourFeedModule { }
