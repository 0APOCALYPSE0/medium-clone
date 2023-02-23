import { ArticleState } from './../types/articleState.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const articleFeatureSelector = createFeatureSelector<ArticleState>('article');

export const isLoadingSelector = createSelector(articleFeatureSelector, (articleState:ArticleState) => articleState.isLoading);

export const errorSelector = createSelector(articleFeatureSelector, (articleState:ArticleState) => articleState.error);

export const articleSelector = createSelector(articleFeatureSelector, (articleState:ArticleState) => articleState.article);