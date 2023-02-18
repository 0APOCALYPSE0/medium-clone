import { FeedResponse } from './../../types/feed-response.interface';
import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const feedAction = createAction(ActionTypes.GET_FEED, props<{ url:string }>());

export const feedSuccessAction = createAction(ActionTypes.GET_FEED_SUCCESS, props<{ feed:FeedResponse }>());

export const feedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);