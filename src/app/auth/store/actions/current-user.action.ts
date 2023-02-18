import { CurrentUser } from './../../../shared/types/currentUser.interface';
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const currentUserAction = createAction(ActionTypes.CURRENT_USER);

export const currentUserSuccessAction = createAction(ActionTypes.CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUser }>());

export const currentUserFailureAction = createAction(ActionTypes.CURRENT_USER_FAILURE);