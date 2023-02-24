import { CurrentUser } from 'src/app/shared/types/currentUser.interface';
import { map } from 'rxjs/operators';
import { currentUserSelector } from './../../../auth/store/selectors';
import { articleSelector, isLoadingSelector, errorSelector } from './../../store/selector';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { Article } from 'src/app/shared/types/article.interface';
import { ActivatedRoute } from '@angular/router';
import { articleAction } from './../../store/actions/article.action';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { deleteArticleAction } from '../../store/actions/delete-article.action';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug!:string | null;
  article!:Article | null;
  articleSubscription!:Subscription;
  isLoading$!:Observable<boolean>;
  error$!:Observable<string | null>;
  isAuthor$!:Observable<boolean>;

  constructor(private store:Store, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.intializeValues();
    this.initializeListeners();
    this.fetchArticle();
  }

  intializeValues(): void{
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))])
      .pipe(map(([article, currentUser]:[Article | null, CurrentUser | null]) => {
        if(!article || !currentUser){
          return false;
        }
        return article.author.username === currentUser.username;
    }));
  }

  initializeListeners(){
    this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe({
      next: (article:Article | null) => {
        this.article = article;
      }
    });
  }

  fetchArticle(): void{
    this.store.dispatch(articleAction({ slug: (this.slug === null) ? '' : this.slug }))
  }

  deleteArticle(): void{
    this.store.dispatch(deleteArticleAction({ slug: (this.slug === null) ? '' : this.slug }));
  }

  ngOnDestroy(): void {
    this.articleSubscription && this.articleSubscription.unsubscribe();
  }

}
