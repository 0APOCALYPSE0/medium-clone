import { UserProfileService } from './../../services/user-profile.service';
import { userProfileAction, userProfileSuccessAction, userProfileFailureAction } from '../actions/user-profile.action';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class UserProfileEffect {

  constructor(private actions$:Actions, private userProfileService:UserProfileService) {}

  userProfile$ = createEffect(() => this.actions$.pipe(ofType(userProfileAction), switchMap(({slug}) => {
    return this.userProfileService.getUserProfile(slug).pipe(map((profile) => {
      return userProfileSuccessAction({profile});
    }),
    catchError(() => {
      return of(userProfileFailureAction())
    }))
  })))

}