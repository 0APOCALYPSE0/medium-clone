import { Article } from 'src/app/shared/types/article.interface';
import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { ArticleInput } from './../../../shared/types/article-input.interface';
import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const createArticleAction = createAction(ActionTypes.CREATE_ARTICLE, props<{ article:ArticleInput }>());

export const createArticleSuccessAction = createAction(ActionTypes.CREATE_ARTICLE_SUCCESS, props<{ article:Article }>());

export const createArticleFailureAction = createAction(ActionTypes.CREATE_ARTICLE_FAILURE, props<{ errors: BackendErrors }>());