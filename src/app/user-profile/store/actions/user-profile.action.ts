import { UserProfile } from './../../types/user-profile.interface';
import { ActionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const userProfileAction = createAction(ActionTypes.USER_PROFILE, props<{ slug:string }>());

export const userProfileSuccessAction = createAction(ActionTypes.USER_PROFILE_SUCCESS, props<{ profile:UserProfile }>());

export const userProfileFailureAction = createAction(ActionTypes.USER_PROFILE_FAILURE);