import { BackendErrors } from './../../shared/types/backendErrors.interface';

export interface CreateArticleState{
  isSubmitting:boolean;
  validationErrors:BackendErrors | null;
}