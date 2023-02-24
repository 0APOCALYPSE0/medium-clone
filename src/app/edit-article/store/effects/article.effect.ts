import { Article } from 'src/app/shared/types/article.interface';
import { ArticleService } from '../../../shared/services/article/article.service';
import { articleAction, articleSuccessAction, articleFailureAction } from '../actions/article.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class ArticleEffect {

  constructor(private actions$:Actions, private articleService:ArticleService) {}

  article$ = createEffect(() => this.actions$.pipe(ofType(articleAction), switchMap(({slug}) => {
    return this.articleService.getArticle(slug).pipe(map((article: Article) => {
      return articleSuccessAction({article});
    }),
    catchError(() => {
      return of(articleFailureAction())
    }))
  })))

}