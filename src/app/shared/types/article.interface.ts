import { PopularTagType } from './popularTag.type';
import { Profile } from "./profile.interface";

export interface Article {
  title:string;
  slug:string;
  body:string;
  createdAt:string;
  updatedAt:string;
  tagList:PopularTagType[];
  description:string;
  author: Profile;
  favorited:boolean;
  favoritesCount:number;
}