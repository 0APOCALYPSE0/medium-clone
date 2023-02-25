import { createSelector } from '@ngrx/store';
import { SettingsState } from './../types/settings-state.interface';
import { createFeatureSelector } from '@ngrx/store';

export const settingsFeatureSelector = createFeatureSelector<SettingsState>('settings');

export const isSubmittingSelector = createSelector(settingsFeatureSelector, (settingsState:SettingsState) => settingsState.isSubmitting);

export const validationErrorsSelector = createSelector(settingsFeatureSelector, (settingsState:SettingsState) => settingsState.validationErrors);