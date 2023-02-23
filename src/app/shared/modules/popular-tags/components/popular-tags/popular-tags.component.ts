import { isLoadingSelector, popularTagsSelector, errorSelector } from './../../store/selectors';
import { popularTagsAction } from './../../store/actions/popular-tags.action';
import { AppState } from './../../../../types/appState.interface';
import { PopularTagType } from './../../../../types/popularTag.type';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit{
  isLoading$!:Observable<boolean>;
  tags$!:Observable<PopularTagType[] | null>;
  error$!:Observable<string | null>;

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  fetchData(): void{
    this.store.dispatch(popularTagsAction());
  }

  initializeValues(): void{
    this.tags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }
}
