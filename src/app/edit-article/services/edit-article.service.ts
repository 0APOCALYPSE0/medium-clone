import { map } from 'rxjs/operators';
import { SaveArticleResponse } from './../../shared/types/saveArticleResponse.interface';
import { environment } from './../../../environments/environment';
import { Article } from 'src/app/shared/types/article.interface';
import { ArticleInput } from './../../shared/types/article-input.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EditArticleService {
  private updateArticleUrl:string = `${environment.apiUrl}/articles/`;

  constructor(private http:HttpClient) { }

  updateArticle(slug:string, article:ArticleInput):Observable<Article>{
    this.updateArticleUrl = this.updateArticleUrl+slug;
    return this.http.put<SaveArticleResponse>(this.updateArticleUrl, {article}).pipe(map((response:SaveArticleResponse) => response.article));
  }

}
