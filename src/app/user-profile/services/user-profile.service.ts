import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { UserProfileResponse } from './../types/user-profile-response.interface';
import { UserProfile } from './../types/user-profile.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  userProfileUrl:string = `${environment.apiUrl}/profiles/`;

  constructor(private http:HttpClient) { }

  getUserProfile(slug:string):Observable<UserProfile>{
    return this.http.get<UserProfileResponse>(this.userProfileUrl+slug).pipe(map((response:UserProfileResponse) => response.profile));
  }
}
