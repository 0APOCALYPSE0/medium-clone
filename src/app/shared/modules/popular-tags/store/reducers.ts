import { popularTagsAction, popularTagsSuccessAction, popularTagsFailureAction } from './actions/popular-tags.action';
import { createReducer, on, Action } from '@ngrx/store';
import { PopularTagsState } from '../types/popularTagsState.interface';

const initialState:PopularTagsState = {
  isLoading: false,
  error: null,
  tags: null
}

const popularTagsReducer = createReducer(initialState,
  on(popularTagsAction, (state):PopularTagsState => ({
    ...state,
    isLoading:true
  })),
  on(popularTagsSuccessAction, (state, action):PopularTagsState => ({
    ...state,
    isLoading:false,
    tags: action.popularTags
  })),
  on(popularTagsFailureAction, (state):PopularTagsState => ({
    ...state,
    isLoading:false
  }))
)

export const reducers = (state:PopularTagsState, action:Action) => {
  return popularTagsReducer(state, action);
}