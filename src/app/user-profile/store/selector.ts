import { UserProfileState } from './../types/user-profile-state.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const userProfileFeatureSelector = createFeatureSelector<UserProfileState>('user-profile');

export const userProfileSelector = createSelector(userProfileFeatureSelector, (userProfileState:UserProfileState) => userProfileState.profile);

export const isLoadingSelector = createSelector(userProfileFeatureSelector, (userProfileState:UserProfileState) => userProfileState.isLoading);

export const errorSelector = createSelector(userProfileFeatureSelector, (userProfileState:UserProfileState) => userProfileState.error);