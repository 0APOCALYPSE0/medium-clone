import { FeedResponse } from './feed-response.interface';
export interface FeedState{
  isLoading:boolean;
  error:string | null;
  feed: FeedResponse | null;
}