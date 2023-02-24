import { Article } from 'src/app/shared/types/article.interface';
import { BackendErrors } from '../../shared/types/backendErrors.interface';

export interface EditArticleState{
  article:Article | null;
  isSubmitting:boolean;
  isLoading:boolean;
  validationErrors:BackendErrors | null;
}