import { routerNavigationAction } from '@ngrx/router-store';
import { articleAction, articleSuccessAction, articleFailureAction } from './actions/article.action';
import { createReducer, on, Action } from '@ngrx/store';
import { ArticleState } from '../types/articleState.interface';

const initialState:ArticleState = {
  isLoading: false,
  error: null,
  article: null
}

const articleReducer = createReducer(initialState,
  on(articleAction, (state):ArticleState => ({
    ...state,
    isLoading:true
  })),
  on(articleSuccessAction, (state, action):ArticleState => ({
    ...state,
    isLoading:false,
    article: action.article
  })),
  on(articleFailureAction, (state):ArticleState => ({
    ...state,
    isLoading:false
  })),
  on(routerNavigationAction, ():ArticleState => initialState)
)

export const reducers = (state:ArticleState, action:Action) => {
  return articleReducer(state, action);
}