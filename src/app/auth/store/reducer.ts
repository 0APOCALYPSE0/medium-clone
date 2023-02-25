import { logoutAction } from './actions/sync.action';
import { updateCurrentUserSuccessAction } from './actions/update-current-user.action';
import { AuthState } from "../types/authState.interface";
import { createReducer, on, Action } from "@ngrx/store";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";
import { currentUserAction, currentUserFailureAction, currentUserSuccessAction } from "./actions/current-user.action";

const initialState:AuthState = {
  isSubmit: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

const authReducer = createReducer(initialState,
  on(registerAction, (state):AuthState => ({
    ...state,
    isSubmit: true,
    validationErrors: null
  })),
  on(registerSuccessAction, (state, action):AuthState => ({
    ...state,
    isSubmit: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(registerFailureAction, (state, action):AuthState => ({
    ...state,
    isSubmit: false,
    isLoggedIn: false,
    validationErrors: action.errors
  })),
  on(loginAction, (state):AuthState => ({
    ...state,
    isSubmit: true,
    validationErrors: null
  })),
  on(loginSuccessAction, (state, action):AuthState => ({
    ...state,
    isSubmit: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action):AuthState => ({
    ...state,
    isSubmit: false,
    isLoggedIn: false,
    validationErrors: action.errors
  })),
  on(currentUserAction, (state):AuthState => ({
    ...state,
    isLoading: true
  })),
  on(currentUserSuccessAction, (state, action):AuthState => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(currentUserFailureAction, (state):AuthState => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null
  })),
  on(updateCurrentUserSuccessAction, (state, action):AuthState => ({
    ...state,
    currentUser: action.currentUser
  })),
  on(logoutAction, (state):AuthState => ({
    ...state,
    ...initialState,
    isLoggedIn: false
  }))
);

export const reducers = (state:AuthState, action:Action) => {
  return authReducer(state, action);
}