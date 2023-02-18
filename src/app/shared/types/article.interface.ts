import { Profile } from "./profile.interface";

export interface Article {
  title:string;
  slug:string;
  body:string;
  createdAt:string;
  updatedAt:string;
  tagList:string[];
  description:string;
  author: Profile;
  favorited:boolean;
  favoritesCount:number;
}