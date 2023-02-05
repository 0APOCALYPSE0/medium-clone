import { AuthResponse } from './../types/authResponse.interface';
import { environment } from './../../../environments/environment';
import { RegisterRequest } from './../types/registerRequest.interface';
import { CurrentUser } from './../../shared/types/currentUser.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private regisetrUrl:string = `${environment.apiUrl}/users`;

  constructor(private http:HttpClient) { }

  register(registerRequest:RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(this.regisetrUrl, registerRequest).pipe(map((response:AuthResponse) => response.user));
  }
}
