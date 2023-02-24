import { Article } from 'src/app/shared/types/article.interface';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { articleAction } from './../../store/actions/article.action';
import { updateArticleAction } from './../../store/actions/update-article.action';
import { errorsSelector, isLoadingSelector, articleSelector } from './../../store/selector';
import { BackendErrors } from './../../../shared/types/backendErrors.interface';
import { filter, Observable } from 'rxjs';
import { ArticleInput } from './../../../shared/types/article-input.interface';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { isSubmittingSelector } from '../../store/selector';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  initialValues$!:Observable<ArticleInput>;
  slug!:string | null;
  isLoading$!:Observable<boolean>;
  isSubmitting$!:Observable<boolean>;
  errors$!:Observable<BackendErrors | null>;

  constructor(private store:Store, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchArticle();
  }

  initializeValues(): void{
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
    this.initialValues$ = this.store.pipe(select(articleSelector), filter(Boolean), map((article:Article) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList
      }
    }))
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  fetchArticle():void{
    this.store.dispatch(articleAction({ slug: this.slug ? this.slug : '' }));
  }

  onSubmit(article:ArticleInput){
    this.store.dispatch(updateArticleAction({slug: this.slug ? this.slug : '', article}));
  }
}
