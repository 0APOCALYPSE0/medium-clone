import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedResponse } from '../types/feed-response.interface';

@Injectable()
export class FeedService {

  constructor(private http:HttpClient) { }

  getFeed(url: string): Observable<FeedResponse>{
    const feedUrl = environment.apiUrl+url;
    return this.http.get<FeedResponse>(feedUrl);
  }
}
