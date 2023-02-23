import { PopularTagType } from './../../../../types/popularTag.type';
import { PopularTagsService } from './../../services/popular-tags.service';
import { popularTagsAction, popularTagsSuccessAction, popularTagsFailureAction } from '../actions/popular-tags.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class PopularTagsEffect {

  constructor(private actions$:Actions, private popularTagService: PopularTagsService) {}

  popularTags$ = createEffect(() => this.actions$.pipe(ofType(popularTagsAction), switchMap(() => {
    return this.popularTagService.getPopularTage().pipe(map((popularTags: PopularTagType[]) => {
      return popularTagsSuccessAction({popularTags});
    }),
    catchError(() => {
      return of(popularTagsFailureAction())
    }))
  })))

}