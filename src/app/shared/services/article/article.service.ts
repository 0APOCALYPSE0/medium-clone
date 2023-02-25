import { map } from 'rxjs/operators';
import { ArticleResponse } from './../../types/articleResponse.interface';
import { environment } from './../../../../environments/environment';
import { Article } from 'src/app/shared/types/article.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
  private articleUrl:string = `${environment.apiUrl}/articles/`;

  constructor(private http:HttpClient) { }

  getArticle(slug:string): Observable<Article>{
    return this.http.get<ArticleResponse>(this.articleUrl+slug).pipe(map((response:ArticleResponse) => response.article));
  }

}
