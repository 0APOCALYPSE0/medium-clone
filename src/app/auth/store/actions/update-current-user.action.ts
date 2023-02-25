import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { CurrentUserInput } from './../../../shared/types/current-user-input.interface';
import { CurrentUser } from '../../../shared/types/currentUser.interface';
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const updateCurrentUserAction = createAction(ActionTypes.UPDATE_CURRENT_USER, props<{ user: CurrentUserInput }>());

export const updateCurrentUserSuccessAction = createAction(ActionTypes.UPDATE_CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUser }>());

export const updateCurrentUserFailureAction = createAction(ActionTypes.UPDATE_CURRENT_USER_FAILURE, props<{ errors: BackendErrors }>());