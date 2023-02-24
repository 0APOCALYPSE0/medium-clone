import { CreateArticleState } from './../types/create-article-state.interface';
import { createArticleAction, createArticleSuccessAction, createArticleFailureAction } from './actions/create-article.action';
import { createReducer, on, Action } from '@ngrx/store';

const initialState:CreateArticleState = {
  isSubmitting: false,
  validationErrors: null
}

const createArticleReducer = createReducer(initialState,
  on(createArticleAction, (state):CreateArticleState => ({
    ...state,
    isSubmitting:true
  })),
  on(createArticleSuccessAction, (state):CreateArticleState => ({
    ...state,
    isSubmitting:false,
  })),
  on(createArticleFailureAction, (state, action):CreateArticleState => ({
    ...state,
    isSubmitting:false,
    validationErrors: action.errors
  }))
)

export const reducers = (state:CreateArticleState, action:Action) => {
  return createArticleReducer(state, action);
}