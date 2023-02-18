import { FeedState } from './../types/feedState.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const feedFeatureSelector = createFeatureSelector<FeedState>('feed');

export const isLoadingSelector = createSelector(feedFeatureSelector, (feedState:FeedState) => feedState.isLoading);

export const errorSelector = createSelector(feedFeatureSelector, (feedState:FeedState) => feedState.error);

export const feedSelector = createSelector(feedFeatureSelector, (feedState:FeedState) => feedState.feed);