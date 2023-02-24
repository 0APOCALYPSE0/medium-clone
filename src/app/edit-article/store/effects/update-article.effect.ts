import { Article } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EditArticleService } from '../../services/edit-article.service';
import { updateArticleAction, updateArticleSuccessAction, updateArticleFailureAction } from '../actions/update-article.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class UpdateArticleEffect {

  constructor(private actions$:Actions, private editArticleService:EditArticleService, private router:Router) {}

  updateArticle$ = createEffect(() => this.actions$.pipe(ofType(updateArticleAction), switchMap(({slug, article}) => {
    return this.editArticleService.updateArticle(slug, article).pipe(map((article) => {
      return updateArticleSuccessAction({article});
    }),
    catchError((errorResponse: HttpErrorResponse) => {
      return of(updateArticleFailureAction({ errors: errorResponse.error.errors }))
    }))
  })))

  redirectAfterUpdate$ = createEffect(() => this.actions$.pipe(ofType(updateArticleSuccessAction), tap(({article}) => {
    this.router.navigate(['/articles', article.slug]);
  })), { dispatch: false })

}