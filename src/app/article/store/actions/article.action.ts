import { Article } from 'src/app/shared/types/article.interface';
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const articleAction = createAction(ActionTypes.GET_ARTICLE, props<{ slug:string }>());

export const articleSuccessAction = createAction(ActionTypes.GET_ARTICLE_SUCCESS, props<{ article:Article }>());

export const articleFailureAction = createAction(ActionTypes.GET_ARTICLE_FAILURE);