import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { CurrentUser } from './../../../shared/types/currentUser.interface';
import { LoginRequest } from '../../types/loginRequest.interface';
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const loginAction = createAction(ActionTypes.LOGIN, props<{ request:LoginRequest }>());

export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{ currentUser: CurrentUser }>());

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{ errors: BackendErrors }>());