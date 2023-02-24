import { EditArticleState } from '../types/edit-article-state.interface';
import { updateArticleAction, updateArticleSuccessAction, updateArticleFailureAction } from './actions/update-article.action';
import { createReducer, on, Action } from '@ngrx/store';
import { articleAction, articleSuccessAction, articleFailureAction } from './actions/article.action';

const initialState:EditArticleState = {
  article:null,
  isLoading:false,
  isSubmitting: false,
  validationErrors: null
}

const editArticleReducer = createReducer(initialState,
  on(updateArticleAction, (state):EditArticleState => ({
    ...state,
    isSubmitting:true
  })),
  on(updateArticleSuccessAction, (state):EditArticleState => ({
    ...state,
    isSubmitting:false,
  })),
  on(updateArticleFailureAction, (state, action):EditArticleState => ({
    ...state,
    isSubmitting:false,
    validationErrors: action.errors
  })),
  on(articleAction, (state):EditArticleState => ({
    ...state,
    isLoading:true
  })),
  on(articleSuccessAction, (state, action):EditArticleState => ({
    ...state,
    isLoading:false,
    article: action.article
  })),
  on(articleFailureAction, (state):EditArticleState => ({
    ...state,
    isLoading:false,
  }))
)

export const reducers = (state:EditArticleState, action:Action) => {
  return editArticleReducer(state, action);
}