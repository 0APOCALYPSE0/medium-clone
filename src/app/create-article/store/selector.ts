import { CreateArticleState } from './../types/create-article-state.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const createArticleFeatureSelector = createFeatureSelector<CreateArticleState>('create-article');

export const isSubmittingSelector = createSelector(createArticleFeatureSelector, (createArticleState:CreateArticleState) => createArticleState.isSubmitting);

export const errorsSelector = createSelector(createArticleFeatureSelector, (createArticleState:CreateArticleState) => createArticleState.validationErrors);