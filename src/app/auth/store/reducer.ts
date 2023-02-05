import { AuthState } from "../types/authState.interface";
import { createReducer, on, Action } from "@ngrx/store";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";

const initialState:AuthState = {
  isSubmit: false,
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
  })));

export const reducers = (state:AuthState, action:Action) => {
  return authReducer(state, action);
}