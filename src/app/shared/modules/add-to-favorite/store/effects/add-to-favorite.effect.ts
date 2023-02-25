import { Article } from 'src/app/shared/types/article.interface';
import { switchMap, map, catchError } from 'rxjs/operators';
import { addToFavoriteAction, addToFavoriteSuccessAction, addToFavoriteFailureAction } from './../actions/add-to-favorite.action';
import { AddToFavoriteService } from './../../services/add-to-favorite.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AddToFavoriteEffect{

  constructor(private actions$:Actions, private addToFavoriteService:AddToFavoriteService) {}

  addToFavorite$ = createEffect(() => this.actions$.pipe(ofType(addToFavoriteAction), switchMap(({isFavorited, slug}) => {
    const article$ = isFavorited ? this.addToFavoriteService.removeFromFavorite(slug) : this.addToFavoriteService.addToFavorite(slug);
    return article$.pipe(map((article:Article) => {
      return addToFavoriteSuccessAction({article})
    }),
    catchError(() => {
      return of(addToFavoriteFailureAction());
    }))
  })))
}