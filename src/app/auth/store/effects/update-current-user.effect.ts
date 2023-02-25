import { HttpErrorResponse } from '@angular/common/http';
import { CurrentUser } from '../../../shared/types/currentUser.interface';
import { updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction } from '../actions/update-current-user.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

@Injectable()

export class UpdateCurrentUserEffect {

  constructor(private actions$:Actions, private authService:AuthService) {}

  updateCurrentUser$ = createEffect(() => this.actions$.pipe(ofType(updateCurrentUserAction), switchMap(({user}) => {
    return this.authService.updateCurrentUser(user).pipe(map((currentUser: CurrentUser) => {
      return updateCurrentUserSuccessAction({currentUser});
    }),
    catchError((errorResponse: HttpErrorResponse) => {
      return of(updateCurrentUserFailureAction(errorResponse.error.errors))
    }))
  })))

}