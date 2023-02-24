import { Article } from 'src/app/shared/types/article.interface';
import { BackendErrors } from '../../../shared/types/backendErrors.interface';
import { ArticleInput } from '../../../shared/types/article-input.interface';
import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const updateArticleAction = createAction(ActionTypes.UPDATE_ARTICLE, props<{ slug:string, article:ArticleInput }>());

export const updateArticleSuccessAction = createAction(ActionTypes.UPDATE_ARTICLE_SUCCESS, props<{ article:Article }>());

export const updateArticleFailureAction = createAction(ActionTypes.UPDATE_ARTICLE_FAILURE, props<{ errors: BackendErrors }>());