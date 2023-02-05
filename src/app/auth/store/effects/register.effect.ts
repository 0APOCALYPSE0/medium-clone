import { PersistanceService } from './../../../shared/services/persistance.service';
import { CurrentUser } from './../../../shared/types/currentUser.interface';
import { registerAction, registerSuccessAction, registerFailureAction } from './../actions/register.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class RegisterEffect {

  constructor(private actions$:Actions, private authService:AuthService, private persistanceService:PersistanceService, private router:Router) {}

  register$ = createEffect(() => this.actions$.pipe(ofType(registerAction), switchMap(({request}) => {
    return this.authService.register(request).pipe(map((currentUser: CurrentUser) => {
      this.persistanceService.set('accessToken', currentUser.token);
      return registerSuccessAction({currentUser});
    }),
    catchError((errorResponse:HttpErrorResponse) => {
      return of(registerFailureAction({ errors: errorResponse.error.errors }))
    }))
  })))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(ofType(registerSuccessAction), tap(() => {
    this.router.navigateByUrl("/");
  })),
  { dispatch: false })
}