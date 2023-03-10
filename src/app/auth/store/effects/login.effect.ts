import { PersistanceService } from '../../../shared/services/persistance/persistance.service';
import { CurrentUser } from './../../../shared/types/currentUser.interface';
import { loginAction, loginSuccessAction, loginFailureAction } from './../actions/login.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class LoginEffect {

  constructor(private actions$:Actions, private authService:AuthService, private persistanceService:PersistanceService, private router:Router) {}

  login$ = createEffect(() => this.actions$.pipe(ofType(loginAction), switchMap(({request}) => {
    return this.authService.login(request).pipe(map((currentUser: CurrentUser) => {
      this.persistanceService.set('accessToken', currentUser.token);
      return loginSuccessAction({currentUser});
    }),
    catchError((errorResponse:HttpErrorResponse) => {
      return of(loginFailureAction({ errors: errorResponse.error.errors }))
    }))
  })))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(ofType(loginSuccessAction), tap(() => {
    this.router.navigateByUrl("/");
  })),
  { dispatch: false })
}