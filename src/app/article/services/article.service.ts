import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
  private deleteArticleUrl:string = `${environment.apiUrl}/articles/`;

  constructor(private http:HttpClient) { }

  deleteArticle(slug:string): Observable<{}>{
    this.deleteArticleUrl = this.deleteArticleUrl+slug;
    return this.http.delete<{}>(this.deleteArticleUrl);
  }

}
