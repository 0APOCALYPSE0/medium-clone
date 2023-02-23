import { PopularTagsResponse } from './../types/popularTagsResponse.interface';
import { map } from 'rxjs/operators';
import { environment } from './../../../../../environments/environment';
import { PopularTagType } from './../../../types/popularTag.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PopularTagsService {
  private popularTagsUrl:string = `${environment.apiUrl}/tags`;

  constructor(private http:HttpClient) { }

  getPopularTage(): Observable<PopularTagType[]> {
    return this.http.get<PopularTagsResponse>(this.popularTagsUrl).pipe(map((response:PopularTagsResponse) => response.tags));
  }
}
