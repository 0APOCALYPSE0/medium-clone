import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from './../../../../../../environments/environment';
import { FeedResponse } from './../../types/feed-response.interface';
import { feedSelector, errorSelector, isLoadingSelector } from './../../store/selector';
import { Observable, Subscription } from 'rxjs';
import { feedAction } from './../../store/actions/feed.action';
import { Store, select } from '@ngrx/store';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import queryString from 'query-string';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges, OnDestroy {
  @Input() apiUrl!:string;
  feed$!: Observable<FeedResponse | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  limit:number = environment.limit;
  baseUrl!:string;
  queryParamsSubscription!:Subscription;
  currentPage!:number;

  constructor(private store:Store, private router:Router, private route:ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged:boolean = !changes['apiUrl'].firstChange && changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue;
    if(isApiUrlChanged){
      this.fetchFeed();
    }
  }

  ngOnInit(): void{
    this.initializeValues();
    this.initializeListeners();
  }

  initializeListeners(): void{
    this.queryParamsSubscription = this.route.queryParams.subscribe((params:Params) => {
      this.currentPage = +(params['page'] || '1');
      this.fetchFeed();
    });
  }

  initializeValues(): void{
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchFeed(): void{
    const offset = (this.currentPage * this.limit) - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrl);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(feedAction({ url: apiUrlWithParams }));
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

}
