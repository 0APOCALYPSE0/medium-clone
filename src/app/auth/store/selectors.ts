import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isSubmitSelector = createSelector(authFeatureSelector, (authState:AuthState) => authState.isSubmit);

export const validationErrorsSelector = createSelector(authFeatureSelector, (authState:AuthState) => authState.validationErrors);

export const isLoggedInSelector = createSelector(authFeatureSelector, (authState:AuthState) => authState.isLoggedIn);

export const isAnonymousSelector = createSelector(authFeatureSelector, (authState:AuthState) => authState.isLoggedIn === false);

export const currentUserSelector = createSelector(authFeatureSelector, (authState:AuthState) => authState.currentUser);