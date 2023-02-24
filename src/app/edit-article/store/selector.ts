import { EditArticleState } from '../types/edit-article-state.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const editArticleFeatureSelector = createFeatureSelector<EditArticleState>('edit-article');

export const articleSelector = createSelector(editArticleFeatureSelector, (editArticleState:EditArticleState) => editArticleState.article);

export const isLoadingSelector = createSelector(editArticleFeatureSelector, (editArticleState:EditArticleState) => editArticleState.isLoading);

export const isSubmittingSelector = createSelector(editArticleFeatureSelector, (editArticleState:EditArticleState) => editArticleState.isSubmitting);

export const errorsSelector = createSelector(editArticleFeatureSelector, (editArticleState:EditArticleState) => editArticleState.validationErrors);