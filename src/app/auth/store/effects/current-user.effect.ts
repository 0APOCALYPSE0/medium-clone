import { PersistanceService } from '../../../shared/services/persistance/persistance.service';
import { CurrentUser } from './../../../shared/types/currentUser.interface';
import { currentUserAction, currentUserSuccessAction, currentUserFailureAction } from './../actions/current-user.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

@Injectable()

export class CurrentUserEffect {

  constructor(private actions$:Actions, private authService:AuthService, private persistanceService:PersistanceService) {}

  currentUser$ = createEffect(() => this.actions$.pipe(ofType(currentUserAction), switchMap(() => {
    const token = this.persistanceService.get('accessToken');
    if(!token){
      return of(currentUserFailureAction());
    }
    return this.authService.getCurrentUser().pipe(map((currentUser: CurrentUser) => {
      return currentUserSuccessAction({currentUser});
    }),
    catchError(() => {
      return of(currentUserFailureAction())
    }))
  })))

}