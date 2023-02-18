import { feedAction, feedSuccessAction, feedFailureAction } from './actions/feed.action';
import { createReducer, on, Action } from '@ngrx/store';
import { FeedState } from './../types/feedState.interface';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState:FeedState = {
  isLoading: false,
  error: null,
  feed: null
}

const feedReducer = createReducer(initialState,
  on(feedAction, (state):FeedState => ({
    ...state,
    isLoading:true
  })),
  on(feedSuccessAction, (state, action):FeedState => ({
    ...state,
    isLoading:false,
    feed: action.feed
  })),
  on(feedFailureAction, (state):FeedState => ({
    ...state,
    isLoading:false
  })),
  on(routerNavigationAction, ():FeedState => initialState)
)

export const reducers = (state:FeedState, action:Action) => {
  return feedReducer(state, action);
}