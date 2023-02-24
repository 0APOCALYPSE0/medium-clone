import { Article } from 'src/app/shared/types/article.interface';
import { SaveArticleResponse } from './../../shared/types/saveArticleResponse.interface';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { ArticleInput } from './../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateArticleService {
  private createArticleUrl:string = `${environment.apiUrl}/articles`;

  constructor(private http:HttpClient) { }

  createArticle(article:ArticleInput):Observable<Article>{
    return this.http.post<SaveArticleResponse>(this.createArticleUrl, {article}).pipe(map((response:SaveArticleResponse) => response.article));
  }
}
