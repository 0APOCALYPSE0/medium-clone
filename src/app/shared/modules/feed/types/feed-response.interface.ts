import { Article } from "src/app/shared/types/article.interface";

export interface FeedResponse {
  articles: Article[];
  articlesCount: number;
}