import { Router } from '@angular/router';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticleService } from '../../services/article.service';
import { deleteArticleAction, deleteArticleSuccessAction, deleteArticleFailureAction } from '../actions/delete-article.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class DeleteArticleEffect {

  constructor(private actions$:Actions, private articleService:ArticleService, private router:Router) {}

  deleteArticle$ = createEffect(() => this.actions$.pipe(ofType(deleteArticleAction), switchMap(({slug}) => {
    return this.articleService.deleteArticle(slug).pipe(map(() => {
      return deleteArticleSuccessAction();
    }),
    catchError(() => {
      return of(deleteArticleFailureAction())
    }))
  })))

  redirectAfterDelete$ = createEffect(() => this.actions$.pipe(ofType(deleteArticleSuccessAction), tap(() => {
    this.router.navigate(['/']);
  })), { dispatch: false })

}