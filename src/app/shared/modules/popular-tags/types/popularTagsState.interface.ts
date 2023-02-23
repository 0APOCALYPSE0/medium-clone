import { PopularTagType } from '../../../types/popularTag.type';
export interface PopularTagsState {
  tags: PopularTagType[] | null;
  isLoading: boolean;
  error: string | null;
}