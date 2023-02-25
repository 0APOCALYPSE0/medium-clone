import { Profile } from './../../shared/types/profile.interface';
export interface UserProfileState{
  isLoading:boolean;
  profile:Profile | null;
  error:string | null;
}