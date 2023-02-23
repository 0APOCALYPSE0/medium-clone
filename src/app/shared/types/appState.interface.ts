import { PopularTagsState } from '../modules/popular-tags/types/popularTagsState.interface';
import { FeedState } from './../modules/feed/types/feedState.interface';
import { AuthState } from './../../auth/types/authState.interface';

export interface AppState{
  auth: AuthState;
  feed: FeedState;
  tags: PopularTagsState;
}