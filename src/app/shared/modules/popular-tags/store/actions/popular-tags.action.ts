import { PopularTagType } from './../../../../types/popularTag.type';
import { ActionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const popularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const popularTagsSuccessAction = createAction(ActionTypes.GET_POPULAR_TAGS_SUCCESS, props<{ popularTags: PopularTagType[] }>());

export const popularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_TAGS_FAILURE);