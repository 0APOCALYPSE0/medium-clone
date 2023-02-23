import { TagListModule } from './../tag-list/tag-list.module';
import { PaginationModule } from './../pagination/pagination.module';
import { ErrorModule } from './../error/error.module';
import { LoadingModule } from './../loading/loading.module';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducer';
import { FeedEffect } from './store/effects/feed.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedService } from './services/feed.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    ErrorModule,
    PaginationModule,
    TagListModule,
    StoreModule.forFeature("feed", reducers),
    EffectsModule.forFeature([FeedEffect])
  ],
  exports: [FeedComponent],
  providers:[FeedService]
})
export class FeedModule { }
