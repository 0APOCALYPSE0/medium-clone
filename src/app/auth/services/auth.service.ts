import { AuthResponse } from './../types/authResponse.interface';
import { environment } from './../../../environments/environment';
import { RegisterRequest } from './../types/registerRequest.interface';
import { CurrentUser } from './../../shared/types/currentUser.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginRequest } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  private regisetrUrl:string = `${environment.apiUrl}/users`;
  private loginUrl:string = `${environment.apiUrl}/users/login`;

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
}
