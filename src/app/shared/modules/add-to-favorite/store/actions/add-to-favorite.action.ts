import { Article } from 'src/app/shared/types/article.interface';
import { ActionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const addToFavoriteAction = createAction(ActionTypes.ADD_TO_FAVORITE, props<{ isFavorited:boolean; slug:string }>());

export const addToFavoriteSuccessAction = createAction(ActionTypes.ADD_TO_FAVORITE_SUCCESS, props<{ article: Article }>());

export const addToFavoriteFailureAction = createAction(ActionTypes.ADD_TO_FAVORITE_FAILURE);