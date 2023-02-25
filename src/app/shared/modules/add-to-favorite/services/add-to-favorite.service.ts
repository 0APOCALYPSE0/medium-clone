import { map } from 'rxjs/operators';
import { ArticleResponse } from './../../../types/articleResponse.interface';
import { environment } from './../../../../../environments/environment';
import { Article } from 'src/app/shared/types/article.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddToFavoriteService {

  constructor(private http:HttpClient) { }

  getUrl(slug:string):string{
    return`${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response:ArticleResponse): Article{
    return response.article;
  }

  addToFavorite(slug:string):Observable<Article>{
    const url:string = this.getUrl(slug);
    return this.http.post<ArticleResponse>(url, {}).pipe(map(this.getArticle));
  }

  removeFromFavorite(slug:string):Observable<Article>{
    const url:string = this.getUrl(slug);
    return this.http.delete<ArticleResponse>(url).pipe(map(this.getArticle));
  }

}
