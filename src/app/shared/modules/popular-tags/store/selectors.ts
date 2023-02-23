import { PopularTagsState } from '../types/popularTagsState.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsState>('tags');

export const isLoadingSelector = createSelector(popularTagsFeatureSelector, (popularTagsState:PopularTagsState) => popularTagsState.isLoading);

export const errorSelector = createSelector(popularTagsFeatureSelector, (popularTagsState:PopularTagsState) => popularTagsState.error);

export const popularTagsSelector = createSelector(popularTagsFeatureSelector, (popularTagsState:PopularTagsState) => popularTagsState.tags);