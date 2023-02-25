import { BackendErrors } from './../../shared/types/backendErrors.interface';

export interface SettingsState{
  isSubmitting:boolean;
  validationErrors:BackendErrors | null;
}