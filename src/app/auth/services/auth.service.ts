import { CurrentUserInput } from './../../shared/types/current-user-input.interface';
import { map } from 'rxjs/operators';
import { AuthResponse } from './../types/authResponse.interface';
import { environment } from './../../../environments/environment';
import { RegisterRequest } from './../types/registerRequest.interface';
import { CurrentUser } from './../../shared/types/currentUser.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  private regisetrUrl:string = `${environment.apiUrl}/users`;
  private loginUrl:string = `${environment.apiUrl}/users/login`;
  private userUrl:string = `${environment.apiUrl}/user`;

  constructor(private http:HttpClient) { }

  getUser(response:AuthResponse): CurrentUser{
    return response.user;
  }

  register(registerRequest:RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(this.regisetrUrl, registerRequest).pipe(map(this.getUser));
  }

  login(loginRequest:LoginRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(this.loginUrl, loginRequest).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUser>{
    return this.http.get<AuthResponse>(this.userUrl).pipe(map(this.getUser));
  }

  updateCurrentUser(user:CurrentUserInput): Observable<CurrentUser>{
    return this.http.put<AuthResponse>(this.userUrl, {user}).pipe(map(this.getUser));
  }

}
