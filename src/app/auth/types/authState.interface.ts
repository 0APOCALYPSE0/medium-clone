import { BackendErrors } from './../../shared/types/backendErrors.interface';
import { CurrentUser } from './../../shared/types/currentUser.interface';

export interface AuthState{
  isSubmit:boolean;
  currentUser:CurrentUser | null;
  isLoggedIn:boolean | null;
  validationErrors: BackendErrors | null;
}