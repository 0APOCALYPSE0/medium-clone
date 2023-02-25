import { updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction } from './../../auth/store/actions/update-current-user.action';
import { createReducer, on, Action } from '@ngrx/store';
import { SettingsState } from './../types/settings-state.interface';

const initialState:SettingsState = {
  isSubmitting: false,
  validationErrors: null
}

const settingsReducer = createReducer(initialState,
  on(updateCurrentUserAction, (state):SettingsState => ({
    ...state,
    isSubmitting: true
  })),
  on(updateCurrentUserSuccessAction, (state):SettingsState => ({
    ...state,
    isSubmitting: false
  })),
  on(updateCurrentUserFailureAction, (state, action):SettingsState => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  }))
)

export const reducers = (state:SettingsState, action:Action) => {
  return settingsReducer(state, action);
}