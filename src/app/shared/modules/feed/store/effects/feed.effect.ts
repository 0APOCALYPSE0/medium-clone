import { FeedResponse } from './../../types/feed-response.interface';
import { FeedService } from './../../services/feed.service';
import { feedAction, feedSuccessAction, feedFailureAction } from '../actions/feed.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class FeedEffect {

  constructor(private actions$:Actions, private feedService:FeedService) {}

  feed$ = createEffect(() => this.actions$.pipe(ofType(feedAction), switchMap(({url}) => {
    return this.feedService.getFeed(url).pipe(map((feed: FeedResponse) => {
      return feedSuccessAction({feed});
    }),
    catchError(() => {
      return of(feedFailureAction())
    }))
  })))

}