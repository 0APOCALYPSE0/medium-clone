import { Article } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateArticleService } from '../../services/create-article.service';
import { createArticleAction, createArticleSuccessAction, createArticleFailureAction } from '../actions/create-article.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class CreateArticleEffect {

  constructor(private actions$:Actions, private createArticleService:CreateArticleService, private router:Router) {}

  createArticle$ = createEffect(() => this.actions$.pipe(ofType(createArticleAction), switchMap(({article}) => {
    return this.createArticleService.createArticle(article).pipe(map((article) => {
      return createArticleSuccessAction({article});
    }),
    catchError((errorResponse: HttpErrorResponse) => {
      return of(createArticleFailureAction({ errors: errorResponse.error.errors }))
    }))
  })))

  redirectAfterCreate$ = createEffect(() => this.actions$.pipe(ofType(createArticleSuccessAction), tap(({article}) => {
    this.router.navigate(['/articles', article.slug]);
  })), { dispatch: false })

}