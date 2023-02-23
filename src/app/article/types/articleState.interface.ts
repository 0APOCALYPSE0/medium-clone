import { Article } from 'src/app/shared/types/article.interface';

export interface ArticleState{
  isLoading:boolean;
  error:string | null;
  article: Article | null;
}