import { UserProfileState } from './../types/user-profile-state.interface';
import { userProfileAction, userProfileSuccessAction, userProfileFailureAction } from './actions/user-profile.action';
import { createReducer, on, Action } from '@ngrx/store';

const initialState:UserProfileState = {
  profile: null,
  isLoading: false,
  error: null
}

const userProfileReducer = createReducer(initialState,
  on(userProfileAction, (state):UserProfileState => ({
    ...state,
    isLoading:true
  })),
  on(userProfileSuccessAction, (state, action):UserProfileState => ({
    ...state,
    isLoading:false,
    profile: action.profile
  })),
  on(userProfileFailureAction, (state):UserProfileState => ({
    ...state,
    isLoading:false
  }))
)

export const reducers = (state:UserProfileState, action:Action) => {
  return userProfileReducer(state, action);
}