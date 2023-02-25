import { CurrentUser } from 'src/app/shared/types/currentUser.interface';

export interface CurrentUserInput extends CurrentUser{
  password:string;
}