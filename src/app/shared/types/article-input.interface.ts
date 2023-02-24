import { PopularTagType } from './popularTag.type';
export interface ArticleInput{
  title:string;
  description:string;
  body:string;
  tagList:PopularTagType[];
}